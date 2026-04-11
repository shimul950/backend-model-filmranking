import { Role } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import {  ICreateAdmin } from "./user.interface";


const createAdmin = async (payload: ICreateAdmin) => {
    // Step 1: Check if user already exists
    const userExists = await prisma.user.findUnique({
        where: {
            email: payload.admin.email,
        },
    });

    if (userExists) {
        throw new Error("User with this email already exists");
    }

    // Step 2: Create user account with Better Auth
    const userData = await auth.api.signUpEmail({
        body: {
            email: payload.admin.email,
            password: payload.password,
            role: Role.ADMIN,
            name: payload.admin.name,
            needPasswordChange: true,
            rememberMe: false,
        },
    });

    // Step 3: Create admin profile in transaction
    try {
        const result = await prisma.$transaction(async (tx) => {
            // Create admin record
            const admin = await tx.admin.create({
                data: {
                    userId: userData.user.id,
                    name: payload.admin.name,
                    email: payload.admin.email,
                    image: payload.admin.image,
                    contactNumber: payload.admin.contactNumber,
                },
            });

            // Fetch created admin with user data
            const createdAdmin = await tx.admin.findUnique({
                where: { id: admin.id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    contactNumber: true,
                    isDeleted: true,
                    createdAt: true,
                    updatedAt: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            role: true,
                            status: true,
                        },
                    },
                },
            });

            return createdAdmin;
        });

        return result;
    } catch{
        // Cleanup: Delete user if admin creation fails
        await prisma.user.delete({
            where: { id: userData.user.id },
        });
        throw new Error("Failed to create admin");
    }
};





export const userService = {
    createAdmin
}