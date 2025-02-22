import express, { Application } from "express";
import cors from "cors";

import { config } from "@config/enviromentVariables";

import { UserRouter } from "@routes/Users.route";
import { ProductRouter } from "@routes/Products.route";
import { SpecialPriceRouter } from "@routes/SpecialPrices.route";

import errorHandler from "@middleware/errorHandler.middleware";

import { connectToDatabase } from "@database/connectToDatabase";

/** Creamos nuestro servidor de express  */
export class Server {
  private serverPort = config.SERVER_PORT;
  private expressServer: Application = express();

  constructor() {
    /** Configuración de cors */
    this.expressServer.use(cors({ origin: "*" }));

    this.expressServer.use(express.urlencoded({ extended: true }));
    this.expressServer.use(express.json());

    /** Endpoints */
    this.expressServer.use("/api", UserRouter);
    this.expressServer.use("/api", ProductRouter);
    this.expressServer.use("/api", SpecialPriceRouter);

    /** Middleware global de errores */
    this.expressServer.use(errorHandler);
  }

  public start = (): void => {
    connectToDatabase().then(() => {
      this.expressServer.listen(this.serverPort, () =>
        console.log("Servidor corriendo en el puerto: " + this.serverPort)
      );
    });
  };
}
