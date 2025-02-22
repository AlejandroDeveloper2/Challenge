import { User } from "@models/User.model";

import { IUserRepository } from "@repositories/user-repository/IUserRepository";

import { AppError } from "@utils/AppError";
import { Validator } from "@utils/Validator";

/** Clase de servicio de usuarios donde se va a ejecutar toda la lógica de negocios*/
export class UserService {
  constructor(private userRepository: IUserRepository) {}

  /** Crea un usuario */
  public createUser = async (user: User): Promise<void> => {
    /** Validar datos para asegurar que tengan un formato valido */
    Validator.validateEmail(user.email);
    Validator.validateNamesLenght<User>(user.name, "name");
    Validator.validateNamesLenght<User>(user.lastName, "lastName");

    const userExist = await this.findUserByEmail(user.email);
    if (userExist)
      throw new AppError(
        `Ya existe un usuario con el email: ${user.email}`,
        400
      );
    return await this.userRepository.createUser(user);
  };

  /** Obtiene la lista de usuarios */
  public findAllUsers = async (): Promise<User[]> => {
    return await this.userRepository.findAllUsers();
  };

  /** Obtiene un usuario por Id */
  public findUserById = async (userId: string): Promise<User> => {
    /** Validar datos para asegurar que tengan un formato valido */
    Validator.validateMongoId(userId);

    const user = await this.userRepository.findUserById(userId);
    if (!user) throw new AppError("No existe un usuario con ese id", 404);
    return user;
  };

  /** Obtiene un usuario por email */
  private findUserByEmail = async (email: string): Promise<User | null> => {
    /** Validar datos para asegurar que tengan un formato valido */
    Validator.validateEmail(email);
    const user = await this.userRepository.findUserByEmail(email);
    return user;
  };
}
