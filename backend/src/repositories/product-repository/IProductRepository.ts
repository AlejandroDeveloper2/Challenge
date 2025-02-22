import { Product } from "@models/Product.model";

export interface IProductRepository {
  createProduct: (product: Product) => Promise<void>;
  findAllProducts: () => Promise<Product[]>;
  findProductsByCategory: (category: string) => Promise<Product[]>;
  findProductById: (productId: string) => Promise<Product | null>;
}
