import { prisma } from "../../lib/prisma";
import { ICreateCast } from "./cast.interfaces";

const createCast = async (payload: ICreateCast) => {
  return await prisma.cast.create({
    data: {
      ...payload,
      birthDate: payload.birthDate ? new Date(payload.birthDate) : undefined,
    },
  });
};

const getAllCasts = async () => {
  return await prisma.cast.findMany({
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

const getSingleCast = async (id: string) => {
  return await prisma.cast.findUnique({
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

const updateCast = async (id: string, payload: Partial<ICreateCast>) => {
  return await prisma.cast.update({
    where: { id },
    data: {
      ...payload,
      birthDate: payload.birthDate ? new Date(payload.birthDate) : undefined,
    },
  });
};

const deleteCast = async (id: string) => {
  return await prisma.cast.delete({
    where: { id },
  });
};

export const castService = {
  createCast,
  getAllCasts,
  getSingleCast,
  updateCast,
  deleteCast,
};
