import { useStore } from "zustand";

import AppStore from "@store/App.store";

const useAppStore = () => {
  return useStore(AppStore);
};

export default useAppStore;
