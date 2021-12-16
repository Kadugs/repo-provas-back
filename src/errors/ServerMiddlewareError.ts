/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';

export default async function ServerMiddlewareError(
  err: any,
  req: Request,
  res: Response,
  next: any,
) {
  return res.sendStatus(500);
}
