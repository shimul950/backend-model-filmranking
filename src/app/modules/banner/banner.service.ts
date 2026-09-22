import { prisma } from "../../lib/prisma";
import { ICreateBanner, IUpdateBanner, IBannerFilterRequest } from "./banner.interfaces";

const createBanner = async (payload: ICreateBanner) => {
  return await prisma.banner.create({
    data: {
      ...payload,
      rating: payload.rating !== undefined ? Number(payload.rating) : 0,
      releaseYear: payload.releaseYear !== undefined ? Number(payload.releaseYear) : undefined,
      duration: payload.duration !== undefined ? Number(payload.duration) : undefined,
      order: payload.order !== undefined ? Number(payload.order) : 0,
      isActive: payload.isActive !== undefined ? Boolean(payload.isActive) : true,
    },
  });
};

const getAllBanners = async (filters: IBannerFilterRequest = {}) => {
  const { searchTerm, isActive, genre } = filters;
  const whereConditions: any = {};

  if (searchTerm) {
    whereConditions.OR = [
      { title: { contains: searchTerm, mode: "insensitive" } },
      { genre: { contains: searchTerm, mode: "insensitive" } },
      { director: { contains: searchTerm, mode: "insensitive" } },
    ];
  }

  if (isActive !== undefined && isActive !== "" && isActive !== null) {
    whereConditions.isActive = typeof isActive === "string" ? isActive === "true" : Boolean(isActive);
  }

  if (genre && genre.toLowerCase() !== "all") {
    whereConditions.genre = { contains: genre, mode: "insensitive" };
  }

  return await prisma.banner.findMany({
    where: whereConditions,
    orderBy: [
      { order: "asc" },
      { createdAt: "desc" },
    ],
  });
};

const getActiveBanners = async () => {
  return await prisma.banner.findMany({
    where: { isActive: true },
    orderBy: [
      { order: "asc" },
      { createdAt: "desc" },
    ],
  });
};

const getSingleBanner = async (id: string) => {
  return await prisma.banner.findUnique({
    where: { id },
  });
};

const updateBanner = async (id: string, payload: IUpdateBanner) => {
  const updateData: any = { ...payload };
  if (payload.rating !== undefined) updateData.rating = Number(payload.rating);
  if (payload.releaseYear !== undefined) updateData.releaseYear = Number(payload.releaseYear);
  if (payload.duration !== undefined) updateData.duration = Number(payload.duration);
  if (payload.order !== undefined) updateData.order = Number(payload.order);
  if (payload.isActive !== undefined) updateData.isActive = Boolean(payload.isActive);

  return await prisma.banner.update({
    where: { id },
    data: updateData,
  });
};

const deleteBanner = async (id: string) => {
  return await prisma.banner.delete({
    where: { id },
  });
};

export const bannerService = {
  createBanner,
  getAllBanners,
  getActiveBanners,
  getSingleBanner,
  updateBanner,
  deleteBanner,
};
