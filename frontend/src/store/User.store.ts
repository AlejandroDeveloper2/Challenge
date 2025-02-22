import { create } from "zustand";
import { toast } from "sonner";

import { User } from "@interfaces/index";

import { UserService } from "@api/index";

interface UserStoreType {
  users: User[];
  findAllUsers: (
    toggleLoading: (message: string | null) => void
  ) => Promise<void>;
}

const UserStore = create<UserStoreType>((set) => ({
  users: [],
  /**  */
  findAllUsers: async (toggleLoading: (message: string | null) => void) => {
    toggleLoading("Cargando usuarios...");
    try {
      const { data: users, message } = await UserService.getUsers();
      set({ users });
      toast.success(message);
    } catch (error: unknown) {
      const { message } = error as Error;
      toast.error(message);
    } finally {
      toggleLoading(null);
    }
  },
}));

export default UserStore;
