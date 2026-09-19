
import status from "http-status";
import AppError from "../../errorHelpers/appError";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { prisma } from "../../lib/prisma"
import { IChangeUserRolePayload, IChangeUserStatusPayload, IUpdateAdmin } from "./admin.interface";
import { Role, UserStatus } from "../../../generated/prisma/enums";

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
            userId: true,
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
        where: { id }
    })

    if (!admin) {
        throw new Error("Admin not found")
    }

    if (admin.userId === user.userId) {
        throw new AppError(status.BAD_REQUEST, "You cannot delete yourself")
    }

    if (admin.isDeleted) {
        throw new Error("Admin is already deleted")
    }

    const result = await prisma.$transaction(async (tx) => {
        const updatedAdmin = await tx.admin.update({
            where: { id },
            data: {
                isDeleted: true,
                deletedAt: new Date()
            }
        })

        await tx.user.update({
            where: { id: admin.userId },
            data: { role: Role.USER }
        })

        return updatedAdmin
    })

    return result;
}

const changeUserStatus = async (user: IRequestUser,userId: string, payload: IChangeUserStatusPayload) => {
    const { userStatus } = payload;

    const selfStatusChange = user.userId === userId;

    if (selfStatusChange) {
        throw new AppError(status.BAD_REQUEST, "You cannot change your own status");
    }

    const userToChangeStatus = await prisma.user.findUniqueOrThrow({
        where: { id: userId }
    })

    /**
     * Only an ADMIN caller has extra restrictions (can't touch other
    admins or super admins). A SUPER_ADMIN caller can change anyone
    except themselves, already handled above.
     */
    
    if (user.role === Role.ADMIN) {
        if (userToChangeStatus.role === Role.SUPER_ADMIN) {
            throw new AppError(status.BAD_REQUEST, "You cannot change the status of SUPER_ADMIN. Only super admin can change the status of super admin.")
        }

        if (userToChangeStatus.role === Role.ADMIN) {
            throw new AppError(status.BAD_REQUEST, "You cannot change the status of another ADMIN. Only super admin can change the status of admin.")
        }
    }

    if (userStatus === UserStatus.DELETED) {
        throw new AppError(status.BAD_REQUEST, "You cannot set user status to deleted. To delete a user, you have to use role specific delete api. For example, to delete an user, you have to use delete doctor api which will set the user status to deleted and also set isDeleted to true and also delete the user session and account")
    }

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { status: userStatus }
    })

    return updatedUser;
}

const changeUserRole = async (user: IRequestUser, userId: string, payload: IChangeUserRolePayload) => {
    /**
     * 1. Super admin can change the role of other super admin and admin. He cannot change his own role.
     * 2. Admin cannot change role of any user.
     */

    const isSuperAdminExist = await prisma.superAdmin.findUniqueOrThrow({
        where: {
            email:user.email,
            user:{
                role:Role.SUPER_ADMIN
            }
        },
        include:{
            user:true
        }
    })

    const {role} = payload;

    const userToChangeRole = await prisma.user.findUniqueOrThrow({
        where:{
            id: userId
        }
    })

    const selfRoleChange = isSuperAdminExist.userId === userId;

    if(selfRoleChange){
        throw new AppError(status.BAD_REQUEST, "You cannot change your own role")
    }

    const result = await prisma.$transaction(async (tx) => {
        // When changing role to ADMIN, create admin profile in admin model
        if (role === Role.ADMIN) {
            await tx.admin.upsert({
                where: {
                    userId: userToChangeRole.id,
                },
                update: {
                    name: userToChangeRole.name,
                    email: userToChangeRole.email,
                    image: userToChangeRole.image,
                    isDeleted: false,
                    deletedAt: null,
                },
                create: {
                    userId: userToChangeRole.id,
                    name: userToChangeRole.name,
                    email: userToChangeRole.email,
                    image: userToChangeRole.image,
                },
            });
        }

        // When changing admin to user, delete admin from admin model, only stay in user
        if (role === Role.USER) {
            await tx.admin.deleteMany({
                where: {
                    userId: userToChangeRole.id,
                },
            });
        }

        const updatedUser = await tx.user.update({
            where: {
                id: userId,
            },
            data: {
                role,
            },
        });

        return updatedUser;
    });

    return result;
}


export const adminService = {
    getAllAdmins,
    getAdminById,
    updateAdmin,
    softDeleteAdmin,
    changeUserRole,
    changeUserStatus
}