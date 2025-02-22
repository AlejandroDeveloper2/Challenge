import { Router } from "express";

import { SpecialPriceController } from "@controllers/SpecialPrice.controller";

/** Declaramos nuestras rutas o endpoints relacionados con el servicio de precios especiales */

export const SpecialPriceRouter = Router();

const controller = new SpecialPriceController();

SpecialPriceRouter.post("/specialPrices", controller.postProductWithDiscount)
  .get("/specialPrices", controller.getProductsWithDiscount)
  .get("/specialPrices/user/:userId", controller.getProductsWithDiscountByUser)
  .get("/specialPrices/:specialPriceId", controller.getProductWithDiscountById)
  .put("/specialPrices/:specialPriceId", controller.putProductWithDiscount)
  .delete("/specialPrices/:specialPriceId", controller.deleteSpecialPrice);
