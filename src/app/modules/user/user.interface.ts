

export interface ICreateAdmin {
  password: string;
  admin: {
    name: string;
    email: string;
    image?: string;
    contactNumber: string;
  };
}
