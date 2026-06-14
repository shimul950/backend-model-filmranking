
import { prisma } from "../../lib/prisma";
import { ICreateMedia, IUpdateMedia } from "./media.interfaces";
import { QueryBuilder } from "../../../utils/QueryBuilder";
import { IQueryParams } from "../../interfaces/queryBuilder.interface";
import { mediaSearchableFields, mediaFilterableFields, mediaIncludeConfig } from "./media.constant";

const createMedia = async (payload: ICreateMedia) => {
  const { genreIds, platformIds, ...mediaData } = payload;

  const result = await prisma.media.create({
    data: {
      ...mediaData,
      

      // connect genres
      genres: genreIds
        ? {
            create: genreIds.map((id) => ({
              genre: { connect: { id } },
            })),
          }
        : undefined,

      // connect platforms
      platforms: platformIds
        ? {
            create: platformIds.map((id) => ({
              platform: { connect: { id } },
            })),
          }
        : undefined,
    },

    include: {
      genres: {
        include:{
          genre:true
        }
      },
      platforms:{
        include:{
          platform: true
        }
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
    .dynamicInclude(mediaIncludeConfig, ['genres', 'platforms'])
    .execute();

  return result;
};

const getMediaById = async (id: string) => {
  const result = await prisma.media.findUnique({
    where: { id },
    include: {
      genres: true,
      platforms: true,
      reviews: true,
    },
  });

  return result;
};

const updateMedia = async (id: string, payload: IUpdateMedia) => {
  const { genreIds, platformIds, ...mediaData } = payload;

  // Delete existing genre and platform relations if provided
  if (genreIds || platformIds) {
    await prisma.mediaGenre.deleteMany({
      where: { mediaId: id },
    });
    await prisma.mediaPlatform.deleteMany({
      where: { mediaId: id },
    });
  }

  const result = await prisma.media.update({
    where: { id },
    data: {
      ...mediaData,

      // connect genres
      genres: genreIds
        ? {
            create: genreIds.map((genreId) => ({
              genre: { connect: { id: genreId } },
            })),
          }
        : undefined,

      // connect platforms
      platforms: platformIds
        ? {
            create: platformIds.map((platformId) => ({
              platform: { connect: { id: platformId } },
            })),
          }
        : undefined,
    },

    include: {
      genres: {
        include:{
          genre:true
        }
      },
      platforms:{
        include:{
          platform: true
        }
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