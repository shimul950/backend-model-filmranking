import { prisma } from "../../lib/prisma";
import { ICreateDirector } from "./director.interfaces";

const createDirector = async (payload: ICreateDirector) => {
  return await prisma.director.create({
    data: {
      ...payload,
      birthDate: payload.birthDate ? new Date(payload.birthDate) : undefined,
    },
  });
};

const getAllDirectors = async () => {
  return await prisma.director.findMany({
    orderBy: { name: "asc" },
    include: {
      media: {
        include: {
          media: true,
        },
      },
    },
  });
};

const getSingleDirector = async (id: string) => {
  return await prisma.director.findUnique({
    where: { id },
    include: {
      media: {
        include: {
          media: true,
        },
      },
    },
  });
};

const updateDirector = async (id: string, payload: Partial<ICreateDirector>) => {
  return await prisma.director.update({
    where: { id },
    data: {
      ...payload,
      birthDate: payload.birthDate ? new Date(payload.birthDate) : undefined,
    },
  });
};

const deleteDirector = async (id: string) => {
  return await prisma.director.delete({
    where: { id },
  });
};

export const directorService = {
  createDirector,
  getAllDirectors,
  getSingleDirector,
  updateDirector,
  deleteDirector,
};
