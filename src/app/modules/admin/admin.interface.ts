import { Role, UserStatus } from "../../../generated/prisma/enums";

export interface IUpdateAdmin {
    name?: string;
    image?: string;
    contactNumber?: string;
}

export interface IChangeUserStatusPayload{
    userId: string;
    userStatus : UserStatus
}

export interface IChangeUserRolePayload{
    userId : string;
    role : Role
}