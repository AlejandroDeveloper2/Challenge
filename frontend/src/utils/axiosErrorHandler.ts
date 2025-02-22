import { AxiosError } from "axios";

import { ServerResponse } from "@interfaces/index";

const axiosErrorHandler = (e: unknown) => {
  const axiosError: AxiosError<ServerResponse<null>> = e as AxiosError<
    ServerResponse<null>
  >;
  if (axiosError.response) throw new Error(axiosError.response.data.message);
  throw new Error("¡No se obtubo respuesta del servidor!");
};

export default axiosErrorHandler;
