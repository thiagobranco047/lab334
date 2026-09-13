CREATE TYPE "public"."share_link_resource_type" AS ENUM('playbook', 'calendario', 'relatorio');--> statement-breakpoint
CREATE TYPE "public"."share_link_status" AS ENUM('active', 'revoked');--> statement-breakpoint
CREATE TABLE "share_links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"token_hash" text NOT NULL,
	"organization_id" text NOT NULL,
	"business_unit_id" text NOT NULL,
	"resource_type" "share_link_resource_type" NOT NULL,
	"resource_id" text NOT NULL,
	"status" "share_link_status" DEFAULT 'active' NOT NULL,
	"expires_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"revoked_at" timestamp with time zone,
	"revoked_by" text,
	CONSTRAINT "share_links_token_hash_unique" UNIQUE("token_hash"),
	CONSTRAINT "share_links_token_hash_format" CHECK ("share_links"."token_hash" ~ '^[0-9a-f]{64}$'),
	CONSTRAINT "share_links_revocation_audit" CHECK (("share_links"."status" = 'active' AND "share_links"."revoked_at" IS NULL AND "share_links"."revoked_by" IS NULL) OR ("share_links"."status" = 'revoked' AND "share_links"."revoked_at" IS NOT NULL AND "share_links"."revoked_by" IS NOT NULL))
);
--> statement-breakpoint
CREATE INDEX "share_links_active_token_hash_idx" ON "share_links" USING btree ("token_hash") WHERE "share_links"."status" = 'active';--> statement-breakpoint
CREATE INDEX "share_links_scope_resource_idx" ON "share_links" USING btree ("organization_id","business_unit_id","resource_type","resource_id");