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
