import { create } from "zustand";

import { User } from "@interfaces/index";

interface AppStoreType {
  user: User | null;
  updateUserState: (user: User | null) => void;
}

const AppStore = create<AppStoreType>((set) => ({
  user: null,
  updateUserState: (user: User | null) => {
    set({ user });
  },
}));

export default AppStore;
