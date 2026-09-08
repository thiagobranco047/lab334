CREATE TYPE "public"."business_unit_grant_status" AS ENUM('active', 'revoked');--> statement-breakpoint
CREATE TABLE "business_unit_grants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"principal_id" text NOT NULL,
	"organization_id" text NOT NULL,
	"business_unit_id" text NOT NULL,
	"permissions" text[] NOT NULL,
	"capabilities" text[] NOT NULL,
	"status" "business_unit_grant_status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_by" text NOT NULL,
	"revoked_at" timestamp with time zone,
	"revoked_by" text,
	CONSTRAINT "business_unit_grants_principal_scope_unique" UNIQUE("principal_id","organization_id","business_unit_id"),
	CONSTRAINT "business_unit_grants_permissions_nonempty" CHECK (cardinality("business_unit_grants"."permissions") > 0),
	CONSTRAINT "business_unit_grants_revocation_audit" CHECK (("business_unit_grants"."status" = 'active' AND "business_unit_grants"."revoked_at" IS NULL AND "business_unit_grants"."revoked_by" IS NULL) OR ("business_unit_grants"."status" = 'revoked' AND "business_unit_grants"."revoked_at" IS NOT NULL AND "business_unit_grants"."revoked_by" IS NOT NULL))
);
--> statement-breakpoint
CREATE INDEX "business_unit_grants_active_principal_org_idx" ON "business_unit_grants" USING btree ("principal_id","organization_id") WHERE "business_unit_grants"."status" = 'active';--> statement-breakpoint
CREATE INDEX "business_unit_grants_active_scope_idx" ON "business_unit_grants" USING btree ("organization_id","business_unit_id") WHERE "business_unit_grants"."status" = 'active';