import { MongoUser, User, UserModel } from "@models/User.model";

import { IUserRepository } from "./IUserRepository";

import { AppError } from "@utils/AppError";

/** Repositorio de usuarios en el cual implementa los diferentes metodos
 * para realizar consultas directamente en la base de datos */
export class MongoUserRepository implements IUserRepository {
  /** Crea un usuario nuevo */
  public createUser = async (user: User): Promise<void> => {
    try {
      await UserModel.create(user);
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al intentar crear el usuario",
        500
      );
    }
  };
  /** Obtiene la lista de usuarios registrados */
  public findAllUsers = async (): Promise<User[]> => {
    try {
      const users: MongoUser[] = await UserModel.find();

      const mappedUsers: User[] = users.map(
        (user) => new User(user.name, user.lastName, user.email, user._id)
      );
      return mappedUsers;
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al intentar obtener la lista de usuarios",
        500
      );
    }
  };

  /** Obtiene un usuario por Id */
  public findUserById = async (userId: string): Promise<User | null> => {
    try {
      const user: MongoUser | null = await UserModel.findById(userId);
      if (!user) return null;

      return new User(user.name, user.lastName, user.email, user._id);
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al intentar obtener el usuario por id",
        500
      );
    }
  };

  /** Obtiene un usuario por email */
  public findUserByEmail = async (email: string): Promise<User | null> => {
    try {
      const user: MongoUser | null = await UserModel.findOne({ email });
      if (!user) return null;

      return new User(user.name, user.lastName, user.email, user._id);
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al intentar obtener el usuario por email",
        500
      );
    }
  };
}
