CREATE TYPE "public"."operation_status" AS ENUM('PLANNING', 'ACTIVE', 'COMPLETED', 'ABORTED');--> statement-breakpoint
CREATE TABLE "operations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"start_date" timestamp with time zone,
	"end_date" timestamp with time zone,
	"status" "operation_status" DEFAULT 'PLANNING' NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
