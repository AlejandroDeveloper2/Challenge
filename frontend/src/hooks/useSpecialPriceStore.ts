import { useStore } from "zustand";

import SpecialPriceStore from "@store/SpecialPrice.store";

const useSpecialPriceStore = () => {
  return useStore(SpecialPriceStore);
};

export default useSpecialPriceStore;
