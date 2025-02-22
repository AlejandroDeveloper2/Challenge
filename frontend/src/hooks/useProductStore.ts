import { useStore } from "zustand";

import ProductStore from "@store/Product.store";

const useProductStore = () => {
  return useStore(ProductStore);
};

export default useProductStore;
