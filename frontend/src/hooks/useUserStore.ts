import { useStore } from "zustand";

import UserStore from "@store/User.store";

const useUserStore = () => {
  return useStore(UserStore);
};

export default useUserStore;
