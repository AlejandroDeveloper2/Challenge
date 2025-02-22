import { Router } from "express";

import { ProductController } from "@controllers/Product.controller";

/** Declaramos nuestras rutas o endpoints relacionados con el servicio de usuarios */

export const ProductRouter = Router();

const controller = new ProductController();

ProductRouter.post("/products", controller.postProduct)
  .get("/products", controller.getProducts)
  .get("/products/category/:productCategory", controller.getProductsByCategory)
  .get("/products/:productId", controller.getProductById);
