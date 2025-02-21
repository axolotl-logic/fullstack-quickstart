CREATE TABLE IF NOT EXISTS "axolotl__chess_pgns" (
	"id" serial PRIMARY KEY NOT NULL,
	"pgn_text" text NOT NULL,
	"last_uploaded" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "axolotl__chess_pgns_pgn_text_unique" UNIQUE("pgn_text")
);
