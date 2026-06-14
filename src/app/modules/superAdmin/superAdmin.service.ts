import status from "http-status";
import AppError from "../../errorHelpers/appError";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { prisma } from "../../lib/prisma";
import { IUpdateSuperAdmin } from "./superAdmin.interface";

const getAllSuperAdmins = async () => {
  const superAdmins = await prisma.superAdmin.findMany({
    where: {
      isDeleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      contactNumber: true,
      isDeleted: true,
      createdAt: true,
      updatedAt: true,
      userId: true,
    },
  });

  return superAdmins;
};

const getSuperAdminById = async (id: string) => {
  const superAdmin = await prisma.superAdmin.findUnique({
    where: {
      id,
      isDeleted: false,
    },
  });

  if (!superAdmin) {
    throw new AppError(status.NOT_FOUND, "Super admin not found");
  }

  return superAdmin;
};

const updateSuperAdmin = async (id: string, payload: IUpdateSuperAdmin) => {
  const existingSuperAdmin = await prisma.superAdmin.findUnique({
    where: { id, isDeleted: false },
  });

  if (!existingSuperAdmin) {
    throw new AppError(status.NOT_FOUND, "Super admin not found");
  }

  return prisma.superAdmin.update({
    where: { id },
    data: payload,
  });
};

const softDeleteSuperAdmin = async (id: string, user: IRequestUser) => {
  const superAdmin = await prisma.superAdmin.findUnique({
    where: { id },
  });

  if (!superAdmin) {
    throw new AppError(status.NOT_FOUND, "Super admin not found");
  }

  if (superAdmin.userId === user.userId) {
    throw new AppError(status.BAD_REQUEST, "You cannot delete yourself");
  }

  if (superAdmin.isDeleted) {
    throw new AppError(status.BAD_REQUEST, "Super admin is already deleted");
  }

  return prisma.superAdmin.update({
    where: { id },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

export const superAdminService = {
  getAllSuperAdmins,
  getSuperAdminById,
  updateSuperAdmin,
  softDeleteSuperAdmin,
};
