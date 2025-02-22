import { SpecialPrice } from "@models/SpecialPrice.model";

import { ISpecialPriceRepository } from "@repositories/special-price-repository/ISpecialPriceRepository";

import { AppError } from "@utils/AppError";
import { Validator } from "@utils/Validator";

/** Clase de servicio de precios especiales para productos donde se va a ejecutar toda la lógica de negocios*/
export class SpecialPriceService {
  constructor(private specialPriceRepository: ISpecialPriceRepository) {}

  /** Crea un precio especial para un determinado producto */
  public createProductWithDiscount = async (
    specialPrice: SpecialPrice
  ): Promise<void> => {
    /** Validar si los campos tienen el formato correcto */
    Validator.validateNumericValue<SpecialPrice>(
      specialPrice.discount,
      "discount"
    );
    Validator.validateNumericValue<SpecialPrice>(
      specialPrice.finalPrice,
      "finalPrice"
    );

    /** Validar si ya existe un precio especial para el producto */
    const foundSpecialPrice = await this.findProductWithDiscountByProduct(
      specialPrice.product.productId ?? ""
    );

    if (foundSpecialPrice)
      throw new AppError(
        `Ya existe un precio especial para el producto: ${specialPrice.product.name}`,
        400
      );

    return await this.specialPriceRepository.createProductWithDiscount(
      specialPrice
    );
  };

  /** Obtiene  precios especiales para determinados productos  */
  public findAllProductsWithDiscount = async (): Promise<SpecialPrice[]> => {
    const specialPriceProducts =
      await this.specialPriceRepository.findAllProductsWithDiscount();
    return specialPriceProducts;
  };

  /** Obtiene  precios especiales para determinados productos que apliquen a un usuario */
  public findProductsWithDiscountByUser = async (
    userId: string
  ): Promise<SpecialPrice[]> => {
    /** Validar si los campos tienen el formato correcto */
    Validator.validateMongoId(userId);

    const specialPriceProducts =
      await this.specialPriceRepository.findProductsWithDiscountByUser(userId);
    return specialPriceProducts;
  };

  /** Obtiene un precio especial para un determinado producto por el Id del producto */
  private findProductWithDiscountByProduct = async (
    productId: string
  ): Promise<SpecialPrice | null> => {
    /** Validar si los campos tienen el formato correcto */
    Validator.validateMongoId(productId);

    const specialPrice =
      await this.specialPriceRepository.findProductWithDiscountByProduct(
        productId
      );

    return specialPrice;
  };

  /** Obtiene un precio especial para un determinado producto por su ID */
  public findProductWithDiscountById = async (
    specialPriceId: string
  ): Promise<SpecialPrice> => {
    /** Validar si los campos tienen el formato correcto */
    Validator.validateMongoId(specialPriceId);

    const specialPrice =
      await this.specialPriceRepository.findProductWithDiscountById(
        specialPriceId
      );

    /** Validar si existe el precio especial para el producto */
    if (!specialPrice)
      throw new AppError(
        "No se encontro el precio especial para el producto",
        404
      );
    return specialPrice;
  };

  /** Modifica un precio especial para un determinado producto */
  public editProductWithDiscount = async (
    specialPriceId: string,
    updatedSpecialPrice: SpecialPrice
  ): Promise<void> => {
    /** Validar si los campos tienen el formato correcto */
    Validator.validateMongoId(specialPriceId);
    Validator.validateNumericValue<SpecialPrice>(
      updatedSpecialPrice.discount,
      "discount"
    );
    Validator.validateNumericValue<SpecialPrice>(
      updatedSpecialPrice.finalPrice,
      "finalPrice"
    );

    /** Validar si existe el precio especial para dicho producto */
    await this.findProductWithDiscountById(specialPriceId);

    return await this.specialPriceRepository.editProductWithDiscount(
      specialPriceId,
      updatedSpecialPrice
    );
  };

  public removeSpecialPrice = async (specialPriceId: string): Promise<void> => {
    /** Validar si los campos tienen el formato correcto */
    Validator.validateMongoId(specialPriceId);

    /** Validar si existe el precio especial para dicho producto */
    await this.findProductWithDiscountById(specialPriceId);

    return await this.specialPriceRepository.removeSpecialPrice(specialPriceId);
  };
}
