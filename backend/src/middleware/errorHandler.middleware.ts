/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

import { handleHttp } from "@utils/handleHttp";
import { AppError } from "@utils/AppError";

/** Middleware global para manejar los diferentes errores y enviarlos al cliente que consume la API */

const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    handleHttp(
      res,
      {
        data: null,
        message: error.message,
      },
      error.code
    );
    return;
  }

  handleHttp(
    res,
    {
      data: null,
      message: "¡Ha ocurrido un error inesperado en el servidor!",
    },
    500
  );
};

export default errorHandler;
