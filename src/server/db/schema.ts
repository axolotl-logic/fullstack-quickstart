// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = t.pgTableCreator((name) => `axolotl__chess_${name}`);

export const pgnsTable = createTable("pgns", {
  id: t.serial("id").primaryKey(),
  pgnText: t.text("pgn_text").notNull().unique(),
  lastUploaded: t.timestamp("last_uploaded", { withTimezone: true }),
  createdAt: t
    .timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: t
    .timestamp("updated_at", { withTimezone: true })
    .$onUpdate(() => new Date()),
});
