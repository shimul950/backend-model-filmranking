import { UserStatus } from "../../../generated/prisma/enums";


export interface ICreateAdmin {
  password: string;
  admin: {
    name: string;
    email: string;
    image?: string;
    contactNumber: string;
  };
}

export interface IGetAllUsersQuery {
    search?: string;
    status?: UserStatus;
    page?: string;
    limit?: string;
}
