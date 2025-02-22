import { Router } from "express";

import { UserController } from "@controllers/User.controller";

/** Declaramos nuestras rutas o endpoints relacionados con el servicio de usuarios */

export const UserRouter = Router();

const controller = new UserController();

UserRouter.post("/users", controller.postUser)
  .get("/users", controller.getUsers)
  .get("/users/:userId", controller.getUserById);
