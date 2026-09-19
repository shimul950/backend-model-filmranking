import { Role, UserStatus } from "../../../generated/prisma/enums";

export interface IUpdateAdmin {
    name?: string;
    image?: string;
    contactNumber?: string;
}

export interface IChangeUserStatusPayload{
    userStatus : UserStatus
}

export interface IChangeUserRolePayload{
    role : Role
}