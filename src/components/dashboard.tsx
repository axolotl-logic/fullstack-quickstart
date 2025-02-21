"use client";

import { useChess } from "~/lib/use-chess";
import { ChessGraph } from "./chess-graph";
import { ChessBoard } from "./chess-board";

export function Dashboard({ pgnText }: { pgnText: string }) {
  const c = useChess(pgnText, 0);

  return (
    <div className="justify-content flex grow items-center">
      <ChessBoard fen={c.fen()} />
      <ChessGraph fen={c.fen()} />
    </div>
  );
}
