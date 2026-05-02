import { prisma } from "../../lib/prisma";
import { ICreateTag } from "./tag.interfaces";


// CREATE
const createTag = async (payload: ICreateTag) => {
  const result = await prisma.tag.create({
    data: payload,
  });
  return result;
};

// GET ALL
const getAllTags = async () => {
  const result = await prisma.tag.findMany({
    orderBy: { name: "asc" },
  });
  return result;
};

// GET SINGLE
const getSingleTag = async (id: string) => {
  const result = await prisma.tag.findUnique({
    where: { id },
  });
  return result;
};

// UPDATE
const updateTag = async (id: string, payload: Partial<ICreateTag>) => {
  const result = await prisma.tag.update({
    where: { id },
    data: payload,
  });
  return result;
};

// DELETE
const deleteTag = async (id: string) => {
  const result = await prisma.tag.delete({
    where: { id },
  });
  return result;
};

export const tagService = {
  createTag,
  getAllTags,
  getSingleTag,
  updateTag,
  deleteTag,
};