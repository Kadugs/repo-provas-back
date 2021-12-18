import { Request, Response, NextFunction } from 'express';
import * as infosService from '../services/infosService';

async function getFormInfos(req: Request, res: Response, next: NextFunction) {
  try {
    const infos: object = await infosService.getFormInfos();
    return res.send(infos);
  } catch (err) {
    return next(err);
  }
}
async function getTeachersTests(req: Request, res: Response, next: NextFunction) {
  try {
    const teacherTests: object = await infosService.getTeachersTests();
    return res.send(teacherTests);
  } catch (err) {
    return next(err);
  }
}
export { getFormInfos, getTeachersTests };
