import axiosClient from "@config/axiosClient";

import {
  ServerResponse,
  SpecialPrice,
  SpecialPriceForm,
} from "@interfaces/index";

import { axiosErrorHandler } from "@utils/index";

export default class SpecialPriceService {
  public static postProductWithDiscount = async (
    newSpecialPrice: SpecialPriceForm
  ): Promise<ServerResponse<null>> => {
    try {
      const specialPriceResponse = (
        await axiosClient.post<ServerResponse<null>>(
          "/specialPrices",
          newSpecialPrice,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
      return specialPriceResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };

  public static getProductsWithDiscount = async (): Promise<
    ServerResponse<SpecialPrice[]>
  > => {
    try {
      const productsWithDiscountResponse = (
        await axiosClient.get<ServerResponse<SpecialPrice[]>>("/specialPrices")
      ).data;
      return productsWithDiscountResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };

  public static getProductsWithDiscountByUser = async (
    userId: string
  ): Promise<ServerResponse<SpecialPrice[]>> => {
    try {
      const productsWithDiscountResponse = (
        await axiosClient.get<ServerResponse<SpecialPrice[]>>(
          `/specialPrices/user/${userId}`
        )
      ).data;
      return productsWithDiscountResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };

  public static getProductWithDiscountById = async (
    specialPriceId: string
  ): Promise<ServerResponse<SpecialPrice>> => {
    try {
      const productWithDiscountResponse = (
        await axiosClient.get<ServerResponse<SpecialPrice>>(
          `/specialPrices/${specialPriceId}`
        )
      ).data;

      return productWithDiscountResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };

  public static putProductWithDiscount = async (
    specialPriceId: string,
    updatedSpecialPrice: SpecialPriceForm
  ): Promise<ServerResponse<null>> => {
    try {
      const updatedSpecialPriceResponse = (
        await axiosClient.put<ServerResponse<null>>(
          `/specialPrices/${specialPriceId}`,
          updatedSpecialPrice,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
      return updatedSpecialPriceResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };
}
