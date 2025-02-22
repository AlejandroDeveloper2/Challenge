import axios, { AxiosInstance } from "axios";

import { config } from "./enviromentVariables";

const axiosClient: AxiosInstance = axios.create({
  baseURL: config.VITE_BACKEND_URL_PRODUCTION + "/api",
});

export default axiosClient;
