import { create } from "zustand";
import { toast } from "sonner";

import { Product, SpecialPrice, SpecialPriceForm } from "@interfaces/index";

import { SpecialPriceService } from "@api/index";
import AppStore from "./App.store";

interface SpecialPriceType {
  specialPrices: SpecialPrice[];
  specialPrice: SpecialPrice | null;
  createProductWithDiscount: (
    newSpecialPrice: SpecialPriceForm,
    toggleLoading: (message: string | null) => void
  ) => Promise<void>;
  findAllProductsWithDiscount: () => Promise<void>;
  findProductsWithDiscountByUser: (
    userId: string,
    toggleLoading: (message: string | null) => void
  ) => Promise<void>;
  findProductWithDiscountById: (
    specialPriceId: string,
    toggleLoading: (message: string | null) => void
  ) => Promise<void>;
  editProductWithDiscount: (
    specialPriceId: string,
    updatedSpecialPrice: SpecialPriceForm,
    toggleLoading: (message: string | null) => void
  ) => Promise<void>;
}

const SpecialPriceStore = create<SpecialPriceType>((set, get) => ({
  specialPrices: [],
  specialPrice: null,

  createProductWithDiscount: async (
    newSpecialPrice: SpecialPriceForm,
    toggleLoading: (message: string | null) => void
  ) => {
    toggleLoading("Creando precio especial...");
    try {
      const { message } = await SpecialPriceService.postProductWithDiscount(
        newSpecialPrice
      );
      const currentUser = AppStore.getState().user;
      if (currentUser)
        get().findProductsWithDiscountByUser(currentUser.userId, toggleLoading);
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    } finally {
      toggleLoading(null);
    }
  },

  findAllProductsWithDiscount: async () => {
    try {
      const { data: specialPrices, message } =
        await SpecialPriceService.getProductsWithDiscount();
      set({ specialPrices });
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    }
  },

  findProductsWithDiscountByUser: async (
    userId: string,
    toggleLoading: (message: string | null) => void
  ) => {
    toggleLoading("Cargando listado de productos con precios especiales...");
    try {
      const { data: specialPrices, message } =
        await SpecialPriceService.getProductsWithDiscountByUser(userId);
      set({ specialPrices });
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    } finally {
      toggleLoading(null);
    }
  },

  findProductWithDiscountById: async (
    specialPriceId: string,
    toggleLoading: (message: string | null) => void
  ) => {
    toggleLoading("Cargando info de precio especial...");
    try {
      const { data: specialPrice, message } =
        await SpecialPriceService.getProductWithDiscountById(specialPriceId);
      set({ specialPrice });
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    } finally {
      toggleLoading(null);
    }
  },

  editProductWithDiscount: async (
    specialPriceId: string,
    updatedSpecialPrice: SpecialPriceForm,
    toggleLoading: (message: string | null) => void
  ) => {
    toggleLoading("Actualizando precio especial...");
    try {
      const { message } = await SpecialPriceService.putProductWithDiscount(
        specialPriceId,
        updatedSpecialPrice
      );

      const currentUser = AppStore.getState().user;

      if (currentUser)
        get().findProductsWithDiscountByUser(currentUser.userId, toggleLoading);

      const updatedPrice: SpecialPrice = {
        specialPriceId,
        product: updatedSpecialPrice.product as Product,
        users: updatedSpecialPrice.users,
        discount: parseInt(updatedSpecialPrice.discount),
        finalPrice: updatedSpecialPrice.finalPrice,
      };

      set({ specialPrice: updatedPrice });
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    } finally {
      toggleLoading(null);
    }
  },
}));

export default SpecialPriceStore;
