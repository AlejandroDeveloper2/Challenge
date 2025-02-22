import { SpecialPrice } from "@models/SpecialPrice.model";

export interface ISpecialPriceRepository {
  createProductWithDiscount: (specialPrice: SpecialPrice) => Promise<void>;
  findAllProductsWithDiscount: () => Promise<SpecialPrice[]>;
  findProductsWithDiscountByUser: (userId: string) => Promise<SpecialPrice[]>;
  findProductWithDiscountByProduct: (
    productId: string
  ) => Promise<SpecialPrice | null>;
  findProductWithDiscountById: (
    specialPriceId: string
  ) => Promise<SpecialPrice | null>;
  editProductWithDiscount: (
    specialPriceId: string,
    updatedSpecialPrice: SpecialPrice
  ) => Promise<void>;
  removeSpecialPrice: (specialPriceId: string) => Promise<void>;
}
