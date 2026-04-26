
import { prisma } from "../../lib/prisma";
import { ICreateGenre } from "./genre.interfaces";


// CREATE
const createGenre = async (payload: ICreateGenre) => {
  const result = await prisma.genre.create({
    data: payload,
  });
  return result;
};

// GET ALL
const getAllGenres = async () => {
  const result = await prisma.genre.findMany({
    orderBy: { name: "asc" },
  });
  return result;
};

// GET SINGLE
const getSingleGenre = async (id: string) => {
  const result = await prisma.genre.findUnique({
    where: { id },
  });
  return result;
};

// UPDATE
const updateGenre = async (id: string, payload: Partial<ICreateGenre>) => {
  const result = await prisma.genre.update({
    where: { id },
    data: payload,
  });
  return result;
};

// DELETE
const deleteGenre = async (id: string) => {
  const result = await prisma.genre.delete({
    where: { id },
  });
  return result;
};

export const genreService = {
  createGenre,
  getAllGenres,
  getSingleGenre,
  updateGenre,
  deleteGenre,
};