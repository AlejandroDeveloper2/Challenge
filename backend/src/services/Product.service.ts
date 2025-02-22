import { Product } from "@models/Product.model";

import { IProductRepository } from "@repositories/product-repository/IProductRepository";

import { AppError } from "@utils/AppError";
import { Validator } from "@utils/Validator";

/** Clase de servicio de productos donde se va a ejecutar toda la lógica de negocios*/
export class ProductService {
  constructor(private productRepository: IProductRepository) {}

  /** Crea un producto */
  public createProduct = async (product: Product): Promise<void> => {
    /** Validar datos para asegurar que tengan un formato valido */
    Validator.validateNumericValue<Product>(product.price, "price");
    Validator.validateNumericValue<Product>(product.stock, "stock");
    Validator.validateNamesLenght<Product>(product.name, "name");
    Validator.validateNamesLenght<Product>(product.category, "category");

    await this.productRepository.createProduct(product);
  };

  /** Obtiene la lista de productos */
  public findAllProducts = async (): Promise<Product[]> => {
    return await this.productRepository.findAllProducts();
  };

  /** Lista productos por categoria especifica */
  public findProductsByCategory = async (
    category: string
  ): Promise<Product[]> => {
    /** Validar datos para asegurar que tengan un formato valido */
    Validator.validateNamesLenght<Product>(category, "category");

    const products = await this.productRepository.findProductsByCategory(
      category
    );

    if (products.length === 0)
      throw new AppError(`No hay productos con la categoria ${category}`, 404);

    return products;
  };

  /** Encuentra un producto por su id */
  public findProductById = async (productId: string): Promise<Product> => {
    /** Validar datos para asegurar que tengan un formato valido */
    Validator.validateMongoId(productId);

    const product = await this.productRepository.findProductById(productId);
    if (!product) throw new AppError("El producto no fue encontrado", 404);
    return product;
  };
}
