<div align="center">
  <br />
    <a href="https://youtu.be/oKIThIihv60" target="_blank">
      <img src="https://github.com/JavaScript-Mastery-Pro/figma-ts/assets/151519281/e03dc22d-0f45-464b-9dc3-f01f07906bee" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Real Time Figma Clone</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/oKIThIihv60" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Liveblocks
- Fabric.js
- Shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Multi Cursors, Cursor Chat, and Reactions**: Allows multiple users to collaborate simultaneously by showing individual cursors, enabling real-time chat, and reactions for interactive communication.

👉 **Active Users**: Displays a list of currently active users in the collaborative environment, providing visibility into who is currently engaged.

👉 **Comment Bubbles**: Enables users to attach comments to specific elements on the canvas, fostering communication and feedback on design components.

👉 **Creating Different Shapes**: Provides tools for users to generate a variety of shapes on the canvas, allowing for diverse design elements

👉 **Uploading Images**: Import images onto the canvas, expanding the range of visual content in the design

👉 **Customization**: Allows users to adjust the properties of design elements, offering flexibility in customizing and fine-tuning visual components

👉 **Freeform Drawing**: Enables users to draw freely on the canvas, promoting artistic expression and creative design.

👉 **Undo/Redo**: Provides the ability to reverse (undo) or restore (redo) previous actions, offering flexibility in design decision-making

👉 **Keyboard Actions**: Allows users to utilize keyboard shortcuts for various actions, including copying, pasting, deleting, and triggering shortcuts for features like opening cursor chat, reactions, and more, enhancing efficiency and accessibility.

👉 **History**: Review the chronological history of actions and changes made on the canvas, aiding in project management and version control.

👉 **Deleting, Scaling, Moving, Clearing, Exporting Canvas**: Offers a range of functions for managing design elements, including deletion, scaling, moving, clearing the canvas, and exporting the final design for external use.

and many more, including code architecture, advanced react hooks, and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/figma-ts.git
cd figma-ts
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
```

Replace the placeholder values with your actual Liveblocks credentials. You can obtain these credentials by signing up on the [Liveblocks website](https://liveblocks.io).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

### Styles

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          black: "#14181F",
          green: "#56FFA6",
          grey: {
            100: "#2B303B",
            200: "#202731",
            300: "#C4D3ED",
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
```

</details>

<details>
<summary><code>app/globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@liveblocks/react-comments/styles.css";

* {
  font-family:
    work sans,
    sans-serif;
}

@layer utilities {
  .no-ring {
    @apply outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0 !important;
  }

  .input-ring {
    @apply h-8 rounded-none border-none  bg-transparent outline-none ring-offset-0 focus:ring-1  focus:ring-primary-green focus:ring-offset-0 focus-visible:ring-offset-0 !important;
  }

  .right-menu-content {
    @apply flex w-80 flex-col gap-y-1 border-none bg-primary-black py-4 text-white !important;
  }

  .right-menu-item {
    @apply flex justify-between px-3 py-2 hover:bg-primary-grey-200 !important;
  }
}
```

</details>

### Overlay Comments

<details>
<summary><code>NewThread</code></summary>

```tsx
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
```

</details>

<details>
<summary><code>PinnedComposer</code></summary>

```tsx
"use client";

import Image from "next/image";
import { Composer, ComposerProps } from "@liveblocks/react-comments";

type Props = {
  onComposerSubmit: ComposerProps["onComposerSubmit"];
};

const PinnedComposer = ({ onComposerSubmit, ...props }: Props) => {
  return (
    <div className="absolute flex gap-4" {...props}>
      <div className="select-none relative w-9 h-9 shadow rounded-tl-md rounded-tr-full rounded-br-full rounded-bl-full bg-white flex justify-center items-center">
        <Image
          src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
          alt="someone"
          width={28}
          height={28}
          className="rounded-full"
        />
      </div>
      <div className="shadow bg-white rounded-lg flex flex-col text-sm min-w-96 overflow-hidden p-2">
        {/**
         * We're using the Composer component to create a new comment.
         * Liveblocks provides a Composer component that allows to
         * create/edit/delete comments.
         *
         * Composer: https://liveblocks.io/docs/api-reference/liveblocks-react-comments#Composer
         */}
        <Composer
          onComposerSubmit={onComposerSubmit}
          autoFocus={true}
          onKeyUp={(e) => {
            e.stopPropagation()
          }}
        />
      </div>
    </div>
  );
};

export default PinnedComposer;
```

</details>

<details>
<summary><code>NewThreadCursor</code></summary>

```tsx
"use client";

import { useEffect, useState } from "react";
import * as Portal from "@radix-ui/react-portal";

const DEFAULT_CURSOR_POSITION = -10000;

// display a custom cursor when placing a new thread
const NewThreadCursor = ({ display }: { display: boolean }) => {
  const [coords, setCoords] = useState({
    x: DEFAULT_CURSOR_POSITION,
    y: DEFAULT_CURSOR_POSITION,
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // get canvas element
      const canvas = document.getElementById("canvas");

      if (canvas) {
        /**
         * getBoundingClientRect returns the size of an element and its position relative to the viewport
         *
         * getBoundingClientRect: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
         */
        const canvasRect = canvas.getBoundingClientRect();

        // check if the mouse is outside the canvas
        // if so, hide the custom comment cursor
        if (
          e.clientX < canvasRect.left ||
          e.clientX > canvasRect.right ||
          e.clientY < canvasRect.top ||
          e.clientY > canvasRect.bottom
        ) {
          setCoords({
            x: DEFAULT_CURSOR_POSITION,
            y: DEFAULT_CURSOR_POSITION,
          });
          return;
        }
      }

      // set the coordinates of the cursor
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  useEffect(() => {
    if (display) {
      document.documentElement.classList.add("hide-cursor");
    } else {
      document.documentElement.classList.remove("hide-cursor");
    }
  }, [display]);

  if (!display) {
    return null;
  }

  return (
    // Portal.Root is used to render a component outside of its parent component
    <Portal.Root>
      <div
        className="pointer-events-none fixed left-0 top-0 h-9 w-9 cursor-grab select-none rounded-bl-full rounded-br-full rounded-tl-md rounded-tr-full bg-white shadow-2xl"
        style={{
          transform: `translate(${coords.x}px, ${coords.y}px)`,
        }}
      />
    </Portal.Root>
  );
};

export default NewThreadCursor;
```

</details>

<details>
<summary><code>CommentsOverlay</code></summary>

```tsx
"use client";

import { useCallback, useRef } from "react";
import { ThreadData } from "@liveblocks/client";

import { ThreadMetadata, useEditThreadMetadata, useThreads, useUser } from "@/liveblocks.config";
import { useMaxZIndex } from "@/lib/useMaxZIndex";

import { PinnedThread } from "./PinnedThread";

type OverlayThreadProps = {
  thread: ThreadData<ThreadMetadata>;
  maxZIndex: number;
};

export const CommentsOverlay = () => {
  /**
   * We're using the useThreads hook to get the list of threads
   * in the room.
   *
   * useThreads: https://liveblocks.io/docs/api-reference/liveblocks-react#useThreads
   */
  const { threads } = useThreads();

  // get the max z-index of a thread
  const maxZIndex = useMaxZIndex();

  return (
    <div>
      {threads
        .filter((thread) => !thread.metadata.resolved)
        .map((thread) => (
          <OverlayThread key={thread.id} thread={thread} maxZIndex={maxZIndex} />
        ))}
    </div>
  );
};

const OverlayThread = ({ thread, maxZIndex }: OverlayThreadProps) => {
  /**
   * We're using the useEditThreadMetadata hook to edit the metadata
   * of a thread.
   *
   * useEditThreadMetadata: https://liveblocks.io/docs/api-reference/liveblocks-react#useEditThreadMetadata
   */
  const editThreadMetadata = useEditThreadMetadata();

  /**
   * We're using the useUser hook to get the user of the thread.
   *
   * useUser: https://liveblocks.io/docs/api-reference/liveblocks-react#useUser
   */
  const { isLoading } = useUser(thread.comments[0].userId);

  // We're using a ref to get the thread element to position it
  const threadRef = useRef<HTMLDivElement>(null);

  // If other thread(s) above, increase z-index on last element updated
  const handleIncreaseZIndex = useCallback(() => {
    if (maxZIndex === thread.metadata.zIndex) {
      return;
    }

    // Update the z-index of the thread in the room
    editThreadMetadata({
      threadId: thread.id,
      metadata: {
        zIndex: maxZIndex + 1,
      },
    });
  }, [thread, editThreadMetadata, maxZIndex]);

  if (isLoading) {
    return null;
  }

  return (
    <div
      ref={threadRef}
      id={`thread-${thread.id}`}
      className="absolute left-0 top-0 flex gap-5"
      style={{
        transform: `translate(${thread.metadata.x}px, ${thread.metadata.y}px)`,
      }}
    >
      {/* render the thread */}
      <PinnedThread thread={thread} onFocus={handleIncreaseZIndex} />
    </div>
  );
};
```

</details>

<details>
<summary><code>PinnedThread</code></summary>

```tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ThreadData } from "@liveblocks/client";
import { Thread } from "@liveblocks/react-comments";

import { ThreadMetadata } from "@/liveblocks.config";

type Props = {
  thread: ThreadData<ThreadMetadata>;
  onFocus: (threadId: string) => void;
};

export const PinnedThread = ({ thread, onFocus, ...props }: Props) => {
  // Open pinned threads that have just been created
  const startMinimized = useMemo(
    () => Number(new Date()) - Number(new Date(thread.createdAt)) > 100,
    [thread]
  );

  const [minimized, setMinimized] = useState(startMinimized);

  /**
   * memoize the result of this function so that it doesn't change on every render but only when the thread changes
   * Memo is used to optimize performance and avoid unnecessary re-renders.
   *
   * useMemo: https://react.dev/reference/react/useMemo
   */

  const memoizedContent = useMemo(
    () => (
      <div
        className='absolute flex cursor-pointer gap-4'
        {...props}
        onClick={(e: any) => {
          onFocus(thread.id);

          // check if click is on/in the composer
          if (
            e.target &&
            e.target.classList.contains("lb-icon") &&
            e.target.classList.contains("lb-button-icon")
          ) {
            return;
          }

          setMinimized(!minimized);
        }}
      >
        <div
          className='relative flex h-9 w-9 select-none items-center justify-center rounded-bl-full rounded-br-full rounded-tl-md rounded-tr-full bg-white shadow'
          data-draggable={true}
        >
          <Image
            src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
            alt='Dummy Name'
            width={28}
            height={28}
            draggable={false}
            className='rounded-full'
          />
        </div>
        {!minimized ? (
          <div className='flex min-w-60 flex-col overflow-hidden rounded-lg bg-white text-sm shadow'>
            <Thread
              thread={thread}
              indentCommentContent={false}
              onKeyUp={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
        ) : null}
      </div>
    ),
    [thread.comments.length, minimized]
  );

  return <>{memoizedContent}</>;
};
```

</details>

## <a name="links">🔗 Links</a>

- [Assets](https://drive.google.com/file/d/17tRs0sEiIsCeTYEXhWEdHMrTshuz2oYf/view?usp=sharing)
- [Components](https://drive.google.com/file/d/1bha-40vlGMIPW9bTRUgHD_SEmT9ZA38S/view?usp=sharing)

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14 Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsmastery.pro/next14" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/557837ce-f612-4530-ab24-189e75133c71" alt="Project Banner">
</a>

<br />
<br />

**Accelerate your professional journey with the Expert Training program**

And if you're hungry for more than just a course and want to understand how we learn and tackle tech challenges, hop into our personalized masterclass. We cover best practices, different web skills, and offer mentorship to boost your confidence. Let's learn and grow together!

<a href="https://www.jsmastery.pro/masterclass" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/fed352ad-f27b-400d-9b8f-c7fe628acb84" alt="Project Banner">
</a>

#
