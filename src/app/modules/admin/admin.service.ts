
import status from "http-status";
import AppError from "../../errorHelpers/appError";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { prisma } from "../../lib/prisma"
import { IChangeUserRolePayload, IChangeUserStatusPayload, IUpdateAdmin } from "./admin.interface";
import { Role } from "../../../generated/prisma/enums";

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

const changeUserStatus = async(user:IRequestUser, payload:IChangeUserStatusPayload) =>{

    // 1. Admin can change the status of any user. Except himself. He cannot change his own status.

    //2. Admin can not change the other admin's status

    const isAdminExists = await prisma.admin.findUniqueOrThrow({
        where:{
            email: user.email
        },
        include: {
            user: true
        }
    })

    const {userId, userStatus} = payload;

    // finding the user/admin who will be changed
    const userToChangeStatus = await prisma.user.findUniqueOrThrow({
        where:{
            id: userId
        }
    })

    const selfStatusChange = isAdminExists.userId === userId;

    if(selfStatusChange){
        throw new AppError(status.BAD_REQUEST, "You cannot change your own status");
    }

    if(isAdminExists.user.role === Role.ADMIN && userToChangeStatus.role === Role.ADMIN){
        throw new AppError(status.BAD_REQUEST, "You cannot change the status of ADMIN")
    }

    
}    

const changeUserRole = async(user:IRequestUser, payload:IChangeUserRolePayload) =>{}


export const adminService = {
    getAllAdmins,
    getAdminById,
    updateAdmin,
    softDeleteAdmin,
    changeUserRole,
    changeUserStatus
}