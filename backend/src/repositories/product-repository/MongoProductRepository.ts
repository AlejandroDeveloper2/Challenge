import { MongoProduct, Product, ProductModel } from "@models/Product.model";
import { IProductRepository } from "./IProductRepository";

import { AppError } from "@utils/AppError";

/** Repositorio de productos en el cual implementa los diferentes metodos
 * para realizar consultas directamente en la base de datos */
export class MongoProductRepository implements IProductRepository {
  private mapProducts = (mongoProducts: MongoProduct[]): Product[] => {
    return mongoProducts.map(
      (product) =>
        new Product(
          product.name,
          product.price,
          product.currencyPrice,
          product.stock,
          product.category,
          product.description,
          product._id
        )
    );
  };

  /** Crea un producto */
  public createProduct = async (product: Product): Promise<void> => {
    try {
      await ProductModel.create(product);
    } catch (error: unknown) {
      console.log(error);
      throw new AppError("Ha ocurrido un error al crear el producto", 500);
    }
  };

  /** Obtiene la lista de productos */
  public findAllProducts = async (): Promise<Product[]> => {
    try {
      const products: MongoProduct[] = await ProductModel.find();
      const mappedProducts: Product[] = this.mapProducts(products);

      return mappedProducts;
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al obtener el listado de productos",
        500
      );
    }
  };
  /** Lista productos por categoria especifica */
  public findProductsByCategory = async (
    category: string
  ): Promise<Product[]> => {
    try {
      const products: MongoProduct[] = await ProductModel.find({ category });
      const mappedProducts: Product[] = this.mapProducts(products);

      return mappedProducts;
    } catch (error: unknown) {
      console.log(error);
      throw new AppError(
        "Ha ocurrido un error al obtener el listado de productos por categoria",
        500
      );
    }
  };

  /** Encuentra un producto por su id */
  public findProductById = async (
    productId: string
  ): Promise<Product | null> => {
    try {
      const product: MongoProduct | null = await ProductModel.findById(
        productId
      );

      if (!product) return null;

      return new Product(
        product.name,
        product.price,
        product.currencyPrice,
        product.stock,
        product.category,
        product.description,
        product._id
      );
    } catch (error: unknown) {
      console.log(error);
      throw new AppError("Ha ocurrido un error al obtener el producto", 500);
    }
  };
}
