import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db } from "~/server/db";
import { pgnsTable } from "~/server/db/schema";
import { Dashboard } from "~/components/dashboard";

export default async function Page({
  params,
}: {
  params: Promise<{ pgn_id: number }>;
}) {
  const pgn_id = (await params).pgn_id;
  const rows = await db
    .select({ pgnText: pgnsTable.pgnText })
    .from(pgnsTable)
    .where(eq(pgnsTable.id, pgn_id));

  if (rows?.length <= 0 || !rows[0]) {
    return notFound();
  }

  const [{ pgnText }] = rows;

  return (
    <main className="flex min-h-screen flex-col">
      <Dashboard pgnText={pgnText} />
    </main>
  );
}
