import { Prisma } from "../../../generated/prisma/client"

export const mediaSearchableFields = [
    "title",
    "synopsis",
    "director",
    "language",
    "country"
]

export const mediaFilterableFields = [
    "title",
    "director",
    "language",
    "country",
    "status",
    "pricing",
    "releaseYear"
]

export const mediaIncludeConfig: Partial<Record<keyof Prisma.MediaInclude, Prisma.MediaInclude[keyof Prisma.MediaInclude]>> = {
    genres: {
        include: {
            genre: true
        }
    },
    platforms: {
        include: {
            platform: true
        }
    },
    reviews: true,
    watchlist: true
}