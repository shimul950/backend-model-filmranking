
import { prisma } from "../../lib/prisma";
import { ICreateMedia } from "./media.interfaces";


const createMedia = async (payload: ICreateMedia) => {
  const { genreIds, platformIds, ...mediaData } = payload;
  console.log(mediaData.duration);

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
      genres: true,
      platforms: true,
    },
  });

  return result;
};

export const mediaService = {
  createMedia,
};