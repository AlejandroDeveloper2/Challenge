import { Request, Response, NextFunction } from "express";

import { User } from "@models/User.model";

import { MongoUserRepository } from "@repositories/user-repository/MongoUserRepository";

import { UserService } from "@services/User.service";

import { handleHttp } from "@utils/handleHttp";

/** Repositorio de usuarios */
const userRepository = new MongoUserRepository();

/** Servicio de usuarios */
const userService = new UserService(userRepository);

/** Controlador http que se comunica con la capa de servicio y delega los datos que resibe del cliente */
export class UserController {
  public postUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user: User = req.body;
      await userService.createUser(user);
      handleHttp(
        res,
        { data: null, message: "Usuario creado exitosamente" },
        201
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const users: User[] = await userService.findAllUsers();
      handleHttp<User[]>(
        res,
        { data: users, message: "Usuarios listados exitosamente" },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId: string = req.params.userId;
      const user: User = await userService.findUserById(userId);

      handleHttp<User>(
        res,
        { data: user, message: "Usuario obtenido exitosamente" },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };
}
