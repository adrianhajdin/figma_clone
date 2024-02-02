"use client";

import {
  FormEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import * as Portal from "@radix-ui/react-portal";
import { ComposerSubmitComment } from "@liveblocks/react-comments/primitives";

import { useCreateThread } from "@/liveblocks.config";
import { useMaxZIndex } from "@/lib/useMaxZIndex";

import PinnedComposer from "./PinnedComposer";
import NewThreadCursor from "./NewThreadCursor";

type ComposerCoords = null | { x: number; y: number };

type Props = {
  children: ReactNode;
};

export const NewThread = ({ children }: Props) => {
  // set state to track if we're placing a new comment or not
  const [creatingCommentState, setCreatingCommentState] = useState<
    "placing" | "placed" | "complete"
  >("complete");

  /**
   * We're using the useCreateThread hook to create a new thread.
   *
   * useCreateThread: https://liveblocks.io/docs/api-reference/liveblocks-react#useCreateThread
   */
  const createThread = useCreateThread();

  // get the max z-index of a thread
  const maxZIndex = useMaxZIndex();

  // set state to track the coordinates of the composer (liveblocks comment editor)
  const [composerCoords, setComposerCoords] = useState<ComposerCoords>(null);

  // set state to track the last pointer event
  const lastPointerEvent = useRef<PointerEvent>();

  // set state to track if user is allowed to use the composer
  const [allowUseComposer, setAllowUseComposer] = useState(false);
  const allowComposerRef = useRef(allowUseComposer);
  allowComposerRef.current = allowUseComposer;

  useEffect(() => {
    // If composer is already placed, don't do anything
    if (creatingCommentState === "complete") {
      return;
    }

    // Place a composer on the screen
    const newComment = (e: MouseEvent) => {
      e.preventDefault();

      // If already placed, click outside to close composer
      if (creatingCommentState === "placed") {
        // check if the click event is on/inside the composer
        const isClickOnComposer = ((e as any)._savedComposedPath = e
          .composedPath()
          .some((el: any) => {
            return el.classList?.contains("lb-composer-editor-actions");
          }));

        // if click is inisde/on composer, don't do anything
        if (isClickOnComposer) {
          return;
        }

        // if click is outside composer, close composer
        if (!isClickOnComposer) {
          setCreatingCommentState("complete");
          return;
        }
      }

      // First click sets composer down
      setCreatingCommentState("placed");
      setComposerCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.documentElement.addEventListener("click", newComment);

    return () => {
      document.documentElement.removeEventListener("click", newComment);
    };
  }, [creatingCommentState]);

  useEffect(() => {
    // If dragging composer, update position
    const handlePointerMove = (e: PointerEvent) => {
      // Prevents issue with composedPath getting removed
      (e as any)._savedComposedPath = e.composedPath();
      lastPointerEvent.current = e;
    };

    document.documentElement.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.documentElement.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  // Set pointer event from last click on body for use later
  useEffect(() => {
    if (creatingCommentState !== "placing") {
      return;
    }

    const handlePointerDown = (e: PointerEvent) => {
      // if composer is already placed, don't do anything
      if (allowComposerRef.current) {
        return;
      }

      // Prevents issue with composedPath getting removed
      (e as any)._savedComposedPath = e.composedPath();
      lastPointerEvent.current = e;
      setAllowUseComposer(true);
    };

    // Right click to cancel placing
    const handleContextMenu = (e: Event) => {
      if (creatingCommentState === "placing") {
        e.preventDefault();
        setCreatingCommentState("complete");
      }
    };

    document.documentElement.addEventListener("pointerdown", handlePointerDown);
    document.documentElement.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.documentElement.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
      document.documentElement.removeEventListener(
        "contextmenu",
        handleContextMenu
      );
    };
  }, [creatingCommentState]);

  // On composer submit, create thread and reset state
  const handleComposerSubmit = useCallback(
    ({ body }: ComposerSubmitComment, event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();

      // Get your canvas element
      const overlayPanel = document.querySelector("#canvas");

      // if there's no composer coords or last pointer event, meaning the user hasn't clicked yet, don't do anything
      if (!composerCoords || !lastPointerEvent.current || !overlayPanel) {
        return;
      }

      // Set coords relative to the top left of your canvas
      const { top, left } = overlayPanel.getBoundingClientRect();
      const x = composerCoords.x - left;
      const y = composerCoords.y - top;

      // create a new thread with the composer coords and cursor selectors
      createThread({
        body,
        metadata: {
          x,
          y,
          resolved: false,
          zIndex: maxZIndex + 1,
        },
      });

      setComposerCoords(null);
      setCreatingCommentState("complete");
      setAllowUseComposer(false);
    },
    [createThread, composerCoords, maxZIndex]
  );

  return (
    <>
      {/**
       * Slot is used to wrap the children of the NewThread component
       * to allow us to add a click event listener to the children
       *
       * Slot: https://www.radix-ui.com/primitives/docs/utilities/slot
       *
       * Disclaimer: We don't have to download this package specifically,
       * it's already included when we install Shadcn
       */}
      <Slot
        onClick={() =>
          setCreatingCommentState(
            creatingCommentState !== "complete" ? "complete" : "placing"
          )
        }
        style={{ opacity: creatingCommentState !== "complete" ? 0.7 : 1 }}
      >
        {children}
      </Slot>

      {/* if composer coords exist and we're placing a comment, render the composer */}
      {composerCoords && creatingCommentState === "placed" ? (
        /**
         * Portal.Root is used to render the composer outside of the NewThread component to avoid z-index issuess
         *
         * Portal.Root: https://www.radix-ui.com/primitives/docs/utilities/portal
         */
        <Portal.Root
          className='absolute left-0 top-0'
          style={{
            pointerEvents: allowUseComposer ? "initial" : "none",
            transform: `translate(${composerCoords.x}px, ${composerCoords.y}px)`,
          }}
          data-hide-cursors
        >
          <PinnedComposer onComposerSubmit={handleComposerSubmit} />
        </Portal.Root>
      ) : null}

      {/* Show the customizing cursor when placing a comment. The one with comment shape */}
      <NewThreadCursor display={creatingCommentState === "placing"} />
    </>
  );
};
