
import status from "http-status";
import AppError from "../../errorHelpers/appError";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { prisma } from "../../lib/prisma"
import { IUpdateAdmin } from "./admin.interface";

const getAllAdmins = async () => {
    // Fetch all non-deleted admin
    const admins = await prisma.admin.findMany({
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
        },
    });


    return admins;
}

const getAdminById = async (id: string) => {
    const admin = await prisma.admin.findUnique({
        where: {
            id,
            isDeleted: false
        },
    })

    if (!admin) {
        throw new Error("Admin not found")
    }

    return admin
}

const updateAdmin = async (id: string, payload: IUpdateAdmin) => {
    // Check if admin  exists and not deleted
    const existingAdmin = await prisma.admin.findUnique({
        where: { id, isDeleted: false },
    });

    if (!existingAdmin) {
        throw new Error("Admin not found");
    }

    // Update admin basic information
    const updatedAdmin = await prisma.admin.update({
        where: {
            id
        },
        data: payload,
    });

    return updatedAdmin
};


const softDeleteAdmin = async (id: string, user: IRequestUser) => {
    const admin = await prisma.admin.findUnique({
        where: {
            id
        }
    })

    if (!admin) {
        throw new Error("Admin not found")
    }

    if(admin.id === user.userId){
        throw new AppError(status.NOT_FOUND, "You cannot delete yourself")
    }

    if (admin.isDeleted) {
        throw new Error("Admin is already deleted")
    }

    const result = await prisma.admin.update({
        where: { id },
        data: {
            isDeleted: true,
            deletedAt: new Date()
        }
    })
    return result;
}


export const adminService = {
    getAllAdmins,
    getAdminById,
    updateAdmin,
    softDeleteAdmin
}