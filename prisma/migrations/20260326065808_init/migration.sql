-- CreateTable
CREATE TABLE "media" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "release_year" INTEGER NOT NULL,
    "director" TEXT NOT NULL,
    "cast" TEXT[],
    "youtube_link" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "media_title_idx" ON "media"("title");

-- CreateIndex
CREATE INDEX "media_release_year_idx" ON "media"("release_year");

-- CreateIndex
CREATE INDEX "media_director_idx" ON "media"("director");
