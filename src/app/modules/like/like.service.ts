import { prisma } from "../../lib/prisma";

const toggleLike = async (userId: string, reviewId: string) => {
  const existing = await prisma.like.findUnique({
    where: {
      userId_reviewId: {
        userId,
        reviewId,
      },
    },
  });

  if (existing) {
    // unlike
    await prisma.like.delete({
      where: { id: existing.id },
    });

    return { liked: false };
  }

  // like
  await prisma.like.create({
    data: {
      userId,
      reviewId,
    },
  });

  return { liked: true };
};

const getLikeCount = async (reviewId: string) => {
  return await prisma.like.count({
    where: { reviewId },
  });
};

export const likeService ={toggleLike, getLikeCount}