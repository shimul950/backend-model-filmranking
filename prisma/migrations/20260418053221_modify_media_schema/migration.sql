/*
  Warnings:

  - Added the required column `country` to the `media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `media` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MediaStatus" AS ENUM ('UPCOMING', 'RELEASED', 'ARCHIVED');

-- AlterTable
ALTER TABLE "media" ADD COLUMN     "averageRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "posterUrl" TEXT,
ADD COLUMN     "reviewCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "status" "MediaStatus" NOT NULL DEFAULT 'RELEASED';
