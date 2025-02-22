import axios, { AxiosInstance } from "axios";

import { config } from "./enviromentVariables";

const axiosClient: AxiosInstance = axios.create({
  baseURL: config.BACKEND_URL_LOCAL + "/api",
});

export default axiosClient;
