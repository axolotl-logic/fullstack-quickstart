import { useMemo } from "react";
import { Chess } from "chess.js";

export function useChess(pgnText: string, moveIdx: number) {
  const chess = useMemo(() => {
    const c = new Chess();
    c.loadPgn(pgnText);

    const current = new Chess();
    c.history().forEach((move, idx) => {
      if (idx > moveIdx) {
        return;
      }

      current.move(move);
    });

    return c;
  }, [pgnText, moveIdx]);

  return chess;
}
