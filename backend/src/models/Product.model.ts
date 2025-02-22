import { model, Schema } from "mongoose";

/** Clase producto (logica de negocios) la cual esta desacoplada del formato de campos de mongo */
export class Product {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly currencyPrice: "USD" | "COPS",
    public readonly stock: number,
    public readonly category: string,
    public readonly description?: string,
    public readonly productId?: string
  ) {}
}

/** interface que representa la colección de productos de mongo */
export interface MongoProduct {
  _id: string;
  name: string;
  description?: string;
  price: number;
  currencyPrice: "USD" | "COPS";
  stock: number;
  category: string;
}

export const MongoProductSchema = new Schema<MongoProduct>(
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
  },
  { timestamps: false, versionKey: false }
);

export const ProductModel = model("products98", MongoProductSchema);
