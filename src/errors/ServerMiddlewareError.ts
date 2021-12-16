/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { HttpStatusCode } from '../enums/http.enum';

export default async function ServerMiddlewareError(
  err: any,
  req: Request,
  res: Response,
  next: any,
) {
  return res.sendStatus(HttpStatusCode.DATABASE_ERROR);
}
