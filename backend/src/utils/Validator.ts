import mongoose from "mongoose";

import { AppError } from "./AppError";

export class Validator {
  static validateEmail = (email: string): void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      throw new AppError("El email ingresado no es valido", 400);
  };

  static validateMongoId = (id: string): void => {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new AppError("El Id no es valido", 400);
  };

  static validateNamesLenght = <T>(name: string, field: keyof T): void => {
    if (name.length <= 3)
      throw new AppError(
        `El ${field.toString()} debe tener al menos 4 caracteres`,
        400
      );
  };

  static validateNumericValue = <T>(value: number, field: keyof T): void => {
    if (value < 0)
      throw new AppError(`El ${field.toString()} no puede ser negativo`, 400);
  };
}
