import { User } from "@models/User.model";

export interface IUserRepository {
  createUser: (user: User) => Promise<void>;
  findAllUsers: () => Promise<User[]>;
  findUserById: (userId: string) => Promise<User | null>;
  findUserByEmail: (email: string) => Promise<User | null>;
}
