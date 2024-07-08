import React from "react";
import { TiClipboard, TiTick } from "react-icons/ti";

export default function CopyButton({ handleCopy, copy }) {
  return (
    <button
      className="absolute px-1 right-5 top-4  ring-1 gap-1 rounded-sm backdrop-blur z-10 text-slate-500"
      onClick={handleCopy}
    >
      {copy ? (
        <div className="flex justify-center items-center gap-1 p-1 w-24 text-sky-400">
          <TiTick />
          copied
        </div>
      ) : (
        <div className="flex justify-center items-center gap-1 p-1 w-24">
          <TiClipboard />
          copy
        </div>
      )}
    </button>
  );
}
