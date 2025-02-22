import { AppError } from "@utils/AppError";

import {
  MongoSpecialPrice,
  SpecialPrice,
  SpecialPriceModel,
} from "@models/SpecialPrice.model";

import { ISpecialPriceRepository } from "./ISpecialPriceRepository";

/** Repositorio de precios especiales para productos en el cual implementa los diferentes metodos
 * para realizar consultas directamente en la base de datos */
export class MongoSpecialPriceRepository implements ISpecialPriceRepository {
  private mapSpecialPrices = (
    mongoSpecialPrices: MongoSpecialPrice[]
  ): SpecialPrice[] => {
    return mongoSpecialPrices.map(
      (specialPrice) =>
        new SpecialPrice(
          specialPrice.product,
          specialPrice.users,
          specialPrice.discount,
          specialPrice.finalPrice,
          specialPrice._id
        )
    );
  };
  /** Crea un precio especial para un determinado producto */
  public createProductWithDiscount = async (
    specialPrice: SpecialPrice
  ): Promise<void> => {
    try {
      console.log(specialPrice);
      await SpecialPriceModel.create(specialPrice);
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al crear el precio especial",
        500
      );
    }
  };

  /** Obtiene  precios especiales para determinados productos */
  public findAllProductsWithDiscount = async (): Promise<SpecialPrice[]> => {
    try {
      const specialPriceProducts: MongoSpecialPrice[] =
        await SpecialPriceModel.find();

      return this.mapSpecialPrices(specialPriceProducts);
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al obtener los productos con precios especiales",
        500
      );
    }
  };

  /** Obtiene  precios especiales para determinados productos que apliquen a un usuario */
  public findProductsWithDiscountByUser = async (
    userId: string
  ): Promise<SpecialPrice[]> => {
    try {
      const specialPriceProducts: MongoSpecialPrice[] =
        await SpecialPriceModel.find({ "users.userId": userId });

      return this.mapSpecialPrices(specialPriceProducts);
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al obtener los productos con precios especiales",
        500
      );
    }
  };
  /** Obtiene un precio especial para un determinado producto por el Id del producto */
  public findProductWithDiscountByProduct = async (
    productId: string
  ): Promise<SpecialPrice | null> => {
    try {
      const specialPrice: MongoSpecialPrice | null =
        await SpecialPriceModel.findOne({ "product.productId": productId });

      if (!specialPrice) return null;

      return this.mapSpecialPrices([specialPrice])[0];
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al obtener el producto con precio especial",
        500
      );
    }
  };

  /** Obtiene un precio especial para un determinado producto por su ID */
  public findProductWithDiscountById = async (
    specialPriceId: string
  ): Promise<SpecialPrice | null> => {
    try {
      const specialPrice: MongoSpecialPrice | null =
        await SpecialPriceModel.findById(specialPriceId);

      if (!specialPrice) return null;

      return this.mapSpecialPrices([specialPrice])[0];
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al obtener el producto con precio especial",
        500
      );
    }
  };

  /** Modifica un precio especial para un determinado producto */
  public editProductWithDiscount = async (
    specialPriceId: string,
    updatedSpecialPrice: SpecialPrice
  ): Promise<void> => {
    try {
      await SpecialPriceModel.updateOne(
        {
          _id: specialPriceId,
        },
        updatedSpecialPrice
      );
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al actualizar el producto con precio especial",
        500
      );
    }
  };

  public removeSpecialPrice = async (specialPriceId: string): Promise<void> => {
    try {
      await SpecialPriceModel.deleteOne({ _id: specialPriceId });
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al eliminar el producto con precio especial",
        500
      );
    }
  };
}
