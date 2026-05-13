/*
  Warnings:

  - A unique constraint covering the columns `[user_id,movie_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movie_id` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "payments_provider_idx";

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "movie_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payments_user_id_movie_id_key" ON "payments"("user_id", "movie_id");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
