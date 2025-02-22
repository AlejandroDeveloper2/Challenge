import { create } from "zustand";
import { toast } from "sonner";

import { Product } from "@interfaces/index";

import { ProductService } from "@api/index";

interface ProductStoreType {
  products: Product[];
  product: Product | null;
  findAllProducts: (
    toggleLoading: (message: string | null) => void
  ) => Promise<void>;
  findProductById: (
    productId: string,
    toggleLoading: (message: string | null) => void
  ) => Promise<void>;
}

const ProductStore = create<ProductStoreType>((set) => ({
  products: [],
  product: null,
  /**  */
  findAllProducts: async (toggleLoading: (message: string | null) => void) => {
    toggleLoading("Cargando productos...");
    try {
      const { data: products, message } = await ProductService.getProducts();
      set({ products });
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    } finally {
      toggleLoading(null);
    }
  },
  findProductById: async (
    productId: string,
    toggleLoading: (message: string | null) => void
  ) => {
    toggleLoading("Cargando info del producto...");
    try {
      const { data: product, message } = await ProductService.getProductById(
        productId
      );
      set({ product });
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    } finally {
      toggleLoading(null);
    }
  },
}));

export default ProductStore;
