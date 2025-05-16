CREATE SCHEMA "file";
--> statement-breakpoint
CREATE TABLE "file"."file_base" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE INDEX "file_base_deleted_at_index" ON "file"."file_base" USING btree ("deleted_at") WHERE "file"."file_base"."deleted_at" is null;--> statement-breakpoint
CREATE VIEW "file"."file" AS (select "id", "created_at", "deleted_at", "name" from "file"."file_base" where "file"."file_base"."deleted_at" is null);