import status from "http-status"
import AppError from "../app/errorHelpers/appError"
import { prisma } from "../app/lib/prisma"
import { Role } from "../generated/prisma/enums"
import { auth } from "../app/lib/auth"
import { envVars } from "../config/env"

export const seedAdmin = async () => {
    try {
        const isAdminExist = await prisma.user.findFirst({
            where: {
                role: Role.ADMIN
            }
        })

        if (isAdminExist) {
            throw new AppError(status.BAD_REQUEST, "Admin already Exist. Skipping seeding super admin")
        }

        const adminUser = await auth.api.signUpEmail({
            body: {
                email: envVars.SEED_ADMIN_EMAIL,
                password: envVars.SEED_ADMIN_PASSWORD,
                name: "Seed admin",
                role: Role.ADMIN,
                needPasswordChange: false,
                rememberMe:false
            }
        })

        await prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: {
                    id: adminUser.user.id
                },
                data: {
                    emailVerified: true
                }
            });

            await tx.admin.create({
                data: {
                    userId: adminUser.user.id,
                    name: 'Seed Admin',
                    email: envVars.SEED_ADMIN_EMAIL
                }
            })

        })

        const seededAdmin = await prisma.admin.findFirst({
            where: {
                email: envVars.SEED_ADMIN_EMAIL
            },
            include: {
                user: true
            }
        })

        console.log("Seededadmin created", seededAdmin);
    } catch (error) {
        console.error("Error seeding admin", error)
        await prisma.user.delete({
            where: {
                email: envVars.SEED_ADMIN_EMAIL
            }
        })
    }

}