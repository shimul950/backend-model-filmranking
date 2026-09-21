import { prisma } from "../../lib/prisma";
import { ICreateWebSeries, ICreateSeason, ICreateEpisode } from "./webSeries.interfaces";

const createWebSeries = async (payload: ICreateWebSeries) => {
  return await prisma.webSeries.create({
    data: payload,
    include: {
      seasons: {
        include: {
          episodes: true,
        },
      },
    },
  });
};

const getAllWebSeries = async () => {
  return await prisma.webSeries.findMany({
    orderBy: { releaseYear: "desc" },
    include: {
      seasons: {
        orderBy: { seasonNumber: "asc" },
        include: {
          episodes: {
            orderBy: { episodeNumber: "asc" },
          },
        },
      },
    },
  });
};

const getSingleWebSeries = async (id: string) => {
  return await prisma.webSeries.findUnique({
    where: { id },
    include: {
      seasons: {
        orderBy: { seasonNumber: "asc" },
        include: {
          episodes: {
            orderBy: { episodeNumber: "asc" },
          },
        },
      },
    },
  });
};

const updateWebSeries = async (id: string, payload: Partial<ICreateWebSeries>) => {
  return await prisma.webSeries.update({
    where: { id },
    data: payload,
    include: {
      seasons: {
        include: {
          episodes: true,
        },
      },
    },
  });
};

const deleteWebSeries = async (id: string) => {
  return await prisma.webSeries.delete({
    where: { id },
  });
};

const addSeason = async (webSeriesId: string, payload: ICreateSeason) => {
  return await prisma.season.create({
    data: {
      ...payload,
      webSeriesId,
      releaseDate: payload.releaseDate ? new Date(payload.releaseDate) : undefined,
    },
    include: {
      episodes: true,
    },
  });
};

const addEpisode = async (seasonId: string, payload: ICreateEpisode) => {
  return await prisma.episode.create({
    data: {
      ...payload,
      seasonId,
    },
  });
};

export const webSeriesService = {
  createWebSeries,
  getAllWebSeries,
  getSingleWebSeries,
  updateWebSeries,
  deleteWebSeries,
  addSeason,
  addEpisode,
};
