import { Request, Response, NextFunction } from "express";

import { SpecialPrice } from "@models/SpecialPrice.model";

import { MongoSpecialPriceRepository } from "@repositories/special-price-repository/MongoSpecialPriceRepository";

import { SpecialPriceService } from "@services/SpecialPrice.service";

import { handleHttp } from "@utils/handleHttp";

/** Repositorio de productos */
const specialPriceRepository = new MongoSpecialPriceRepository();

/** Servicio de productos */
const specialPriceService = new SpecialPriceService(specialPriceRepository);

/** Controlador http que se comunica con la capa de servicio y delega los datos que resibe del cliente */
export class SpecialPriceController {
  public postProductWithDiscount = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const specialPrice: SpecialPrice = req.body;
      await specialPriceService.createProductWithDiscount(specialPrice);

      handleHttp(
        res,
        { data: null, message: "Precio especial agregado exitosamente" },
        201
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getProductsWithDiscount = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const specialPrices =
        await specialPriceService.findAllProductsWithDiscount();

      handleHttp<SpecialPrice[]>(
        res,
        {
          data: specialPrices,
          message: "Precios especiales listados exitosamente",
        },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getProductsWithDiscountByUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId: string = req.params.userId;
      const specialPrices =
        await specialPriceService.findProductsWithDiscountByUser(userId);

      handleHttp<SpecialPrice[]>(
        res,
        {
          data: specialPrices,
          message: "Precios especiales listados exitosamente",
        },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public getProductWithDiscountById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const specialPriceId: string = req.params.specialPriceId;

      const specialPrice =
        await specialPriceService.findProductWithDiscountById(specialPriceId);

      handleHttp<SpecialPrice>(
        res,
        {
          data: specialPrice,
          message: "Precio especial obtenido exitosamente",
        },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public putProductWithDiscount = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const specialPriceId: string = req.params.specialPriceId;
      const updatedSpecialPrice: SpecialPrice = req.body;

      await specialPriceService.editProductWithDiscount(
        specialPriceId,
        updatedSpecialPrice
      );

      handleHttp(
        res,
        {
          data: null,
          message: "Precio especial actualizado exitosamente",
        },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };

  public deleteSpecialPrice = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const specialPriceId: string = req.params.specialPriceId;

      await specialPriceService.removeSpecialPrice(specialPriceId);

      handleHttp(
        res,
        {
          data: null,
          message: "Precio especial eliminado exitosamente",
        },
        200
      );
    } catch (error: unknown) {
      next(error);
    }
  };
}
