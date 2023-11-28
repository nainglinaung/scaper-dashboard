-- CreateEnum
CREATE TYPE "scraping_status" AS ENUM ('in-progress', 'failed', 'done');

-- AlterTable
ALTER TABLE "search_results" ADD COLUMN     "scraping_status" "scraping_status" NOT NULL DEFAULT 'in-progress';
