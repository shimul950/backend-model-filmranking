import { prisma } from "../../lib/prisma";

const createPlatform = async (payload: { name: string }) => {
  const exists = await prisma.platform.findUnique({
    where: { name: payload.name },
  });

  if (exists) {
    throw new Error("Platform already exists");
  }

  return await prisma.platform.create({
    data: payload,
  });
};

const getAllPlatforms = async () => {
  return await prisma.platform.findMany({
    orderBy: { name: "asc" },
  });
};

const getSinglePlatform = async (id: string) => {
  const result = await prisma.platform.findUnique({
    where: { id },
  });

  if (!result) {
    throw new Error("Platform not found");
  }

  return result;
};

const updatePlatform = async (
  id: string,
  payload: { name?: string }
) => {
  const exists = await prisma.platform.findUnique({
    where: { id },
  });

  if (!exists) {
    throw new Error("Platform not found");
  }

  return await prisma.platform.update({
    where: { id },
    data: payload,
  });
};

const deletePlatform = async (id: string) => {
  const exists = await prisma.platform.findUnique({
    where: { id },
  });

  if (!exists) {
    throw new Error("Platform not found");
  }

  await prisma.platform.delete({
    where: { id },
  });

  return { message: "Platform deleted successfully" };
};

export const platformService = {
  createPlatform,
  getAllPlatforms,
  getSinglePlatform,
  updatePlatform,
  deletePlatform,
};