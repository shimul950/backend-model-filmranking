import { prisma } from "../../lib/prisma";
import { ICreateComment, IUpdateComment } from "./comment.interfaces";

const createComment = async (userId: string, payload: ICreateComment) => {
  const { reviewId, content, parentId } = payload;

  if (parentId) {
    const parentComment = await prisma.comment.findUnique({
      where: { id: parentId },
    });

    if (!parentComment || parentComment.reviewId !== reviewId) {
      throw new Error("Parent comment is invalid or belongs to a different review");
    }
  }

  const result = await prisma.comment.create({
    data: {
      content,
      user: { connect: { id: userId } },
      review: { connect: { id: reviewId } },
      parent: parentId ? { connect: { id: parentId } } : undefined,
    },
    include: {
      user: true,
      replies: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

const getCommentsByReview = async (reviewId: string) => {
  const result = await prisma.comment.findMany({
    where: { reviewId },
    include: {
      user: true,
      replies: {
        include: {
          user: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return result;
};

const getCommentById = async (id: string) => {
  const result = await prisma.comment.findUnique({
    where: { id },
    include: {
      user: true,
      replies: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

const updateComment = async (id: string, userId: string, payload: IUpdateComment) => {
  const existing = await prisma.comment.findUnique({ where: { id } });

  if (!existing || existing.userId !== userId) {
    throw new Error("Unauthorized");
  }

  const result = await prisma.comment.update({
    where: { id },
    data: payload,
    include: {
      user: true,
      replies: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

const deleteComment = async (id: string, userId: string) => {
  const existing = await prisma.comment.findUnique({ where: { id } });

  if (!existing || existing.userId !== userId) {
    throw new Error("Unauthorized");
  }

  await prisma.comment.delete({ where: { id } });

  return { deleted: true };
};

export const commentService = {
  createComment,
  getCommentsByReview,
  getCommentById,
  updateComment,
  deleteComment,
};
