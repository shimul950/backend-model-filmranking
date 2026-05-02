/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  reviewFilterableFields,
  reviewSearchableFields
} from "./review.constant";
import { prisma } from "../../lib/prisma";
import { IQueryParams } from "../../interfaces/queryBuilder.interface";
import { QueryBuilder } from "../../../utils/QueryBuilder";
import { IcreateReview, IUpdateReview } from "./review.interfaces";
import { ReviewStatus } from "../../../generated/prisma/enums";

const createReview = async (userId: string, payload: IcreateReview) => {
  // prevent duplicate review
  const existing = await prisma.review.findFirst({
    where: {
      userId,
      mediaId: payload.mediaId
    }
  });

  if (existing) {
    throw new Error("You already reviewed this media");
  }

  const { tagIds, ...reviewData } = payload;

  const result = await prisma.$transaction(async (tx) => {
    const review = await tx.review.create({
      data: {
        ...reviewData,
        userId
      }
    });

    if (tagIds && tagIds.length > 0) {
      await tx.reviewTag.createMany({
        data: tagIds.map(tagId => ({
          reviewId: review.id,
          tagId
        }))
      });
    }

    return await tx.review.findUnique({
      where: { id: review.id },
      include: {
        tags: {
          include: {
            tag: true
          }
        },
        _count:{
          select:{
            likes:true,
            comments:true
          }
        },
        comments:{
          select:{
            content:true
          },
          include:{user:true},
          orderBy:{createdAt: "desc"}
        },
        user: true,
        media: true
      }
    });
  });

  return result;
};

const getAllReviews = async (queryParams: IQueryParams) => {
  const queryBuilder = new QueryBuilder(prisma.review, queryParams, {
    searchableFields: reviewSearchableFields,
    filterableFields: reviewFilterableFields
  });

  return await queryBuilder
    .search()
    .filter()
    .sort()
    .paginate()
    .dynamicInclude({
      user: true,
      media: true,
      tags: {
        include: {
          tag: true
        }
      }
    })
    .execute();
};

const getSingleReview = async (id: string) => {
  return await prisma.review.findUnique({
    where: { id },
    include: {
      user: true,
      media: true,
      comments: true,
      likes: true,
      tags: {
        include: {
          tag: true
        }
      }
    }
  });
};

const updateReview = async (id: string, userId: string, payload: IUpdateReview) => {
  // ensure ownership
  const review = await prisma.review.findUnique({ where: { id } });

  if (!review || review.userId !== userId) {
    throw new Error("Unauthorized");
  }

  const { tagIds, ...reviewData } = payload;

  const result = await prisma.$transaction(async (tx) => {
    const updatedReview = await tx.review.update({
      where: { id },
      data: reviewData
    });

    if (tagIds !== undefined) {
      // Delete all existing tags for this review
      await tx.reviewTag.deleteMany({
        where: { reviewId: id }
      });

      // Add new tags if any
      if (tagIds.length > 0) {
        await tx.reviewTag.createMany({
          data: tagIds.map(tagId => ({
            reviewId: id,
            tagId
          }))
        });
      }
    }

    return await tx.review.findUnique({
      where: { id },
      include: {
        tags: {
          include: {
            tag: true
          }
        },
        user: true,
        media: true
      }
    });
  });

  return result;
};

const updateReviewStatus = async (id: string, status: ReviewStatus) => {
  const review = await prisma.review.update({
    where: { id },
    data: { status }
  });

  // ✅ update media rating if approved
  if (status === "APPROVED") {
    const stats = await prisma.review.aggregate({
      where: {
        mediaId: review.mediaId,
        status: "APPROVED"
      },
      _avg: { rating: true },
      _count: true
    });

    await prisma.media.update({
      where: { id: review.mediaId },
      data: {
        averageRating: stats._avg.rating || 0,
        reviewCount: stats._count
      }
    });
  }

  return review;
};

const deleteReview = async (id: string, userId: string) => {
  const review = await prisma.review.findUnique({ where: { id } });

  if (!review || review.userId !== userId) {
    throw new Error("Unauthorized");
  }

  return await prisma.review.delete({
    where: { id }
  });
};

export const ReviewService = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  updateReviewStatus,
  deleteReview
};