import { Request, Response, NextFunction } from 'express';
import * as infosService from '../services/infosService';

async function getInfos(req: Request, res: Response, next: NextFunction) {
  try {
    const infos: object = await infosService.getInfos();
    return res.send(infos);
  } catch (err) {
    return next(err);
  }
}
export { getInfos };
