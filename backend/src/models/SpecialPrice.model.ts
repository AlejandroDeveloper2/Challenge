import { model, Schema } from "mongoose";

import { Product } from "./Product.model";
import { User } from "./User.model";

/** Clase SpecialPrice (logica de negocios) la cual esta desacoplada del formato de campos de mongo */
export class SpecialPrice {
  constructor(
    public readonly product: Product,
    public readonly users: User[],
    public readonly discount: number,
    public readonly finalPrice: number,
    public readonly specialPriceId?: string
  ) {}
}

/** interface que representa la colección de precios especiales de mongo */
export interface MongoSpecialPrice {
  _id: string;
  product: Product;
  users: User[];
  discount: number;
  finalPrice: number;
}

export const UserSchema = new Schema<User>(
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
    },
    userId: {
      type: String,
      required: true,
      // unique: true,
    },
  },
  { timestamps: false, versionKey: false, _id: false }
);

export const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    currencyPrice: {
      type: String,
      enum: ["USD", "COPS"],
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: false, versionKey: false, _id: false }
);

const MongoSpecialPriceSchema = new Schema<MongoSpecialPrice>(
  {
    product: ProductSchema,
    users: [UserSchema],
    discount: {
      type: Number,
      required: true,
    },
    finalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const SpecialPriceModel = model(
  "preciosEspecialesDiaz98",
  MongoSpecialPriceSchema
);
