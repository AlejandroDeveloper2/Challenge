import "dotenv/config";

export const config = {
  MONGO_DB_URI: process.env.MONGO_DB_URI || "",
  SERVER_PORT: process.env.SERVER_PORT || 4000,
};
