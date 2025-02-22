"use client";

import { Chessground } from "chessground";
import type { Api } from "chessground/api";
import { useEffect, useRef, useState } from "react";

export function ChessBoard({ fen }: { fen: string }) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<Api | null>(null);

  useEffect(() => {
    if (!boardRef.current) {
      return;
    }

    if (api) {
      api.set({ fen });
    } else {
      setApi(
        Chessground(boardRef.current, {
          fen,
          animation: { enabled: true, duration: 200 },
        }),
      );
    }
  }, [boardRef, api, fen]);

  return <div ref={boardRef} className="max-h-80 max-w-80" />;
}
