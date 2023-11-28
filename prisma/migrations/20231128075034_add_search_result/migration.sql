-- CreateTable
CREATE TABLE "search_results" (
    "id" SERIAL NOT NULL,
    "adswords_count" INTEGER NOT NULL,
    "keyword" TEXT NOT NULL,
    "link_count" INTEGER,
    "total_search_result_for_keyword" TEXT,
    "raw_html" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_results_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "search_results" ADD CONSTRAINT "search_results_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
