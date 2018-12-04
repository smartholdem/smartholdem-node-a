BEGIN;

CREATE INDEX IF NOT EXISTS "mem_accounts2delegates_dependentId" ON mem_accounts2delegates ("dependentId");

COMMIT;
