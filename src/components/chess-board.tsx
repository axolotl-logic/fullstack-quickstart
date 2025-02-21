"use client";

import { Chessground } from "chessground";
import type { Api } from "chessground/api";
import { useEffect, useRef, useState } from "react";

export function ChessBoard({ fen }: { fen: string }) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [, setApi] = useState<Api | null>(null);

  useEffect(() => {
    if (!boardRef.current) {
      return;
    }

    setApi(
      Chessground(boardRef.current, {
        fen,
        animation: { enabled: true, duration: 200 },
      }),
    );
  }, [boardRef, fen]);

  return <div ref={boardRef} className="size-80" />;
}
