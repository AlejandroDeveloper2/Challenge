import mongoose from "mongoose";

import { config } from "@config/enviromentVariables";

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.MONGO_DB_URI, {} as mongoose.ConnectOptions);
    console.log("✅ Conexión a base de datos exitosa");
  } catch (error: unknown) {
    console.error(
      "❌ Ha ocurrido un error al conectarse a la base de datos:",
      error
    );
    process.exit(1);
  }
};
