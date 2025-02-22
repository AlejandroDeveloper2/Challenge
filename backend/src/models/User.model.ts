import { model, Schema } from "mongoose";

/** Clase usuario (logica de negocios) la cual esta desacoplada del formato de campos de mongo */
export class User {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly userId?: string
  ) {}
}

/** interface que representa la colección de usuarios de mongo */
export interface MongoUser {
  _id: string;
  name: string;
  lastName: string;
  email: string;
}

const MongoUserSchema = new Schema<MongoUser>(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: false, versionKey: false }
);

export const UserModel = model("users98", MongoUserSchema);
