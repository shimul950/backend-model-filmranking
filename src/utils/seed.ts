
import { prisma } from "../app/lib/prisma"
import { Role } from "../generated/prisma/enums"
import { auth } from "../app/lib/auth"
import { envVars } from "../config/env"

export const seedAdmin = async () => {
    const isAdminExist = await prisma.user.findFirst({
        where: {
            role: Role.ADMIN
        }
    })
    const isSuperAdminExist = await prisma.user.findFirst({
        where: {
            role: Role.SUPER_ADMIN
        }
    })

    if (isAdminExist || isSuperAdminExist) {
        console.log("Admin already exists. Skipping seeding.")
        return
    }

    try {
        const adminUser = await auth.api.signUpEmail({
            body: {
                email: envVars.SEED_ADMIN_EMAIL,
                password: envVars.SEED_ADMIN_PASSWORD,
                name: "Seed admin",
                role: Role.SUPER_ADMIN,
                needPasswordChange: false,
                rememberMe: false
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

            await tx.superAdmin.create({
                data: {
                    userId: adminUser.user.id,
                    name: 'Seed Admin',
                    email: envVars.SEED_ADMIN_EMAIL
                }
            })
        })

        const seededAdmin = await prisma.superAdmin.findFirst({
            where: {
                email: envVars.SEED_ADMIN_EMAIL
            },
            include: {
                user: true
            }
        })

        console.log("Seeded admin created", seededAdmin);
    } catch (error) {
        console.error("Error seeding admin — rolling back", error)
        if (envVars.SEED_ADMIN_EMAIL) {
            await prisma.user.deleteMany({
                where: {
                    email: envVars.SEED_ADMIN_EMAIL
                }
            }).catch((cleanupError) => {
                console.error("Rollback cleanup also failed:", cleanupError)
            })
        }
    }
}