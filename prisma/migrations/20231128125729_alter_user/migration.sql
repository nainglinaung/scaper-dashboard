-- AlterTable
ALTER TABLE "search_results" ALTER COLUMN "adswords_count" SET DEFAULT 0,
ALTER COLUMN "raw_html" DROP NOT NULL;
