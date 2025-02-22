import axiosClient from "@config/axiosClient";

import { Product, ServerResponse } from "@interfaces/index";

import { axiosErrorHandler } from "@utils/index";

export default class ProductService {
  public static getProducts = async (): Promise<ServerResponse<Product[]>> => {
    try {
      const productsResponse = (
        await axiosClient.get<ServerResponse<Product[]>>("/products")
      ).data;

      return productsResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };

  public static getProductById = async (
    productId: string
  ): Promise<ServerResponse<Product>> => {
    try {
      const productResponse = (
        await axiosClient.get<ServerResponse<Product>>(`/products/${productId}`)
      ).data;

      return productResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };
}
