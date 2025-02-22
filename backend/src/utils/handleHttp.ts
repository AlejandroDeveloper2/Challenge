import { Response } from "express";

import { ServerResponse } from "@interfaces/.";

export const handleHttp = <T>(
  res: Response,
  serverResponse: ServerResponse<T>,
  code: number
): void => {
  res.status(code);
  res.send(serverResponse);
};
