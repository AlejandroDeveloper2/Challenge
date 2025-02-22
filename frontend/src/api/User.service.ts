import axiosClient from "@config/axiosClient";

import { ServerResponse, User } from "@interfaces/index";

import { axiosErrorHandler } from "@utils/index";

export default class UserService {
  public static getUsers = async (): Promise<ServerResponse<User[]>> => {
    try {
      const usersResponse = (
        await axiosClient.get<ServerResponse<User[]>>("/users")
      ).data;
      return usersResponse;
    } catch (error: unknown) {
      return axiosErrorHandler(error);
    }
  };
}
