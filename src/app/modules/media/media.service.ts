import { prisma } from "../../lib/prisma";
import { ICreateMedia, IUpdateMedia } from "./media.interfaces";
import { QueryBuilder } from "../../../utils/QueryBuilder";
import { IQueryParams } from "../../interfaces/queryBuilder.interface";
import { mediaSearchableFields, mediaFilterableFields, mediaIncludeConfig } from "./media.constant";

const createMedia = async (payload: ICreateMedia) => {
  const { genreIds, platformIds, castIds, directorIds, ...mediaData } = payload;

  const result = await prisma.media.create({
    data: {
      ...mediaData,

      genres: genreIds
        ? {
            create: genreIds.map((id) => ({
              genre: { connect: { id } },
            })),
          }
        : undefined,

      platforms: platformIds
        ? {
            create: platformIds.map((id) => ({
              platform: { connect: { id } },
            })),
          }
        : undefined,

      casts: castIds
        ? {
            create: castIds.map((castId, index) => ({
              cast: { connect: { id: castId } },
              order: index,
            })),
          }
        : undefined,

      directors: directorIds
        ? {
            create: directorIds.map((directorId) => ({
              director: { connect: { id: directorId } },
            })),
          }
        : undefined,
    },

    include: {
      genres: {
        include: {
          genre: true,
        },
      },
      platforms: {
        include: {
          platform: true,
        },
      },
      casts: {
        include: {
          cast: true,
        },
      },
      directors: {
        include: {
          director: true,
        },
      },
    },
  });

  return result;
};

const getAllMedia = async (queryParams: IQueryParams = {}) => {
  const queryBuilder = new QueryBuilder(
    prisma.media,
    queryParams,
    {
      searchableFields: mediaSearchableFields,
      filterableFields: mediaFilterableFields,
    }
  );

  const result = await queryBuilder
    .search()
    .filter()
    .sort()
    .paginate()
    .dynamicInclude(mediaIncludeConfig, ['genres', 'platforms', 'casts', 'directors'])
    .execute();

  return result;
};

const getMediaById = async (id: string) => {
  const result = await prisma.media.findUnique({
    where: { id },
    include: {
      genres: {
        include: {
          genre: true,
        },
      },
      platforms: {
        include: {
          platform: true,
        },
      },
      casts: {
        include: {
          cast: true,
        },
      },
      directors: {
        include: {
          director: true,
        },
      },
      reviews: true,
    },
  });

  return result;
};

const updateMedia = async (id: string, payload: IUpdateMedia) => {
  const { genreIds, platformIds, castIds, directorIds, ...mediaData } = payload;

  if (genreIds || platformIds || castIds || directorIds) {
    if (genreIds) {
      await prisma.mediaGenre.deleteMany({
        where: { mediaId: id },
      });
    }
    if (platformIds) {
      await prisma.mediaPlatform.deleteMany({
        where: { mediaId: id },
      });
    }
    if (castIds) {
      await prisma.mediaCast.deleteMany({
        where: { mediaId: id },
      });
    }
    if (directorIds) {
      await prisma.mediaDirector.deleteMany({
        where: { mediaId: id },
      });
    }
  }

  const result = await prisma.media.update({
    where: { id },
    data: {
      ...mediaData,

      genres: genreIds
        ? {
            create: genreIds.map((genreId) => ({
              genre: { connect: { id: genreId } },
            })),
          }
        : undefined,

      platforms: platformIds
        ? {
            create: platformIds.map((platformId) => ({
              platform: { connect: { id: platformId } },
            })),
          }
        : undefined,

      casts: castIds
        ? {
            create: castIds.map((castId, index) => ({
              cast: { connect: { id: castId } },
              order: index,
            })),
          }
        : undefined,

      directors: directorIds
        ? {
            create: directorIds.map((directorId) => ({
              director: { connect: { id: directorId } },
            })),
          }
        : undefined,
    },

    include: {
      genres: {
        include: {
          genre: true,
        },
      },
      platforms: {
        include: {
          platform: true,
        },
      },
      casts: {
        include: {
          cast: true,
        },
      },
      directors: {
        include: {
          director: true,
        },
      },
    },
  });

  return result;
};

const deleteMedia = async (id: string) => {
  const result = await prisma.media.delete({
    where: { id },
  });

  return result;
};

export const mediaService = {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
};
