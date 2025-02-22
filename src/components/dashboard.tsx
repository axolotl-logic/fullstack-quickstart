"use client";

import { useChess } from "~/lib/use-chess";
import { ChessGraph } from "./chess-graph";
import { ChessBoard } from "./chess-board";
import { useState } from "react";

function BoardGraphOverlap({ chess }: Chess) {
  return (
    <>
      <div className="relative size-80">
        <ChessBoard fen={c.fen()} />
        <div className="absolute top-0 left-0 z-50 size-full bg-black/70">
          <ChessGraph fen={c.fen()} />
        </div>
      </div>
    </>
  );
}

export function Dashboard({ pgnText }: { pgnText: string }) {
  const [moveIdx, setMoveIdx] = useState<number>(0);
  const c = useChess(pgnText, moveIdx);

  const handleBack = () => {
    setMoveIdx((idx) => Math.max(idx - 1, 0));
  };

  const handleForward = () => {
    setMoveIdx((idx) => idx + 1);
  };

  console.log(moveIdx);
  return (
    <div className="justify-content flex grow flex-col items-center gap-4">
      <BoardGraphOverlap c={c} />
      <div className="flex gap-2">
        <div className="btn" onClick={handleBack}>
          Back
        </div>
        <div className="btn" onClick={handleForward}>
          Forward
        </div>
      </div>
    </div>
  );
}
