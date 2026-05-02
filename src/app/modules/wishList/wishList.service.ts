/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../lib/prisma";

const toggleWishList = async (userId: string, mediaId: string) => {
  try {
    // Try delete first (toggle OFF)
    await prisma.watchlist.delete({
      where: {
        userId_mediaId: { userId, mediaId },
      },
    });

    return { added: false, message: "Removed from wishlist" };
  } catch (error: any) {
    // If not found → create (toggle ON)
    if (error.code === "P2025") {
      const created = await prisma.watchlist.create({
        data: { userId, mediaId },
        include: { media: true },
      });

      return { added: true, data: created };
    }

    throw error;
  }
};

const getWishList = async (userId: string, page = 1, limit = 10) => {
  const result = await prisma.watchlist.findMany({
    where: { userId },
    include: { media: true },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};

export const wishListService = {
  toggleWishList,
  getWishList,
};