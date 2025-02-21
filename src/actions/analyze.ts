"use server";

import { redirect } from "next/navigation";
import { db } from "~/server/db";
import { pgnsTable } from "~/server/db/schema";
import { Chess } from "chess.js";

export async function submitPGN(pgnText: string) {
  const lastUploaded = new Date();
  const ret = await db
    .insert(pgnsTable)
    .values({ pgnText, lastUploaded })
    .onConflictDoUpdate({ target: pgnsTable.pgnText, set: { lastUploaded } })
    .returning();

  const pgnRow = ret?.[0];
  if (!pgnRow) {
    throw new Error("Database did not respond with pgn");
  }

  const chess = new Chess();
  chess.loadPgn(pgnRow.pgnText);

  redirect(`/pgns/${pgnRow.id}`);
}
