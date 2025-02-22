import { Request, Response, NextFunction } from "express";

import { Product } from "@models/Product.model";

import { MongoProductRepository } from "@repositories/product-repository/MongoProductRepository";

import { ProductService } from "@services/Product.service";

import { handleHttp } from "@utils/handleHttp";

/** Repositorio de productos */
const productRepository = new MongoProductRepository();

/** Servicio de productos */
const productService = new ProductService(productRepository);

/** Controlador http que se comunica con la capa de servicio y delega los datos que resibe del cliente */
export class ProductController {
  public postProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const product: Product = req.body;
      await productService.createProduct(product);
      handleHttp(
        res,
        { data: null, message: "Producto agregado exitosamente" },
        201
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const products = await productService.findAllProducts();
      handleHttp<Product[]>(
        res,
        { data: products, message: "Productos listados exitosamente" },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getProductsByCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const productCategory: string = req.params.productCategory;
      const products = await productService.findProductsByCategory(
        productCategory
      );
      handleHttp<Product[]>(
        res,
        { data: products, message: "Productos listados exitosamente" },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const productId: string = req.params.productId;
      const product = await productService.findProductById(productId);
      handleHttp<Product>(
        res,
        { data: product, message: "Producto obtenido exitosamente" },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };
}
