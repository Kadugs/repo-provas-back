import { Request, Response, NextFunction } from 'express';
import NotFoundError from '../errors/NotFoundError';

import * as infosService from '../services/infosService';

async function getFormInfos(req: Request, res: Response, next: NextFunction) {
  try {
    const infos: object = await infosService.getFormInfos();
    return res.send(infos);
  } catch (error) {
    return next(error);
  }
}
async function getTeachersList(req: Request, res: Response, next: NextFunction) {
  try {
    const teacherTests: object = await infosService.getTeachersList();
    return res.send(teacherTests);
  } catch (err) {
    return next(err);
  }
}
async function getTeacherTests(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (Number(id) < 1) {
    return res.sendStatus(400);
  }

  try {
    const teacherTests = await infosService.getTestsById(Number(id));
    return res.send(teacherTests);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.sendStatus(404);
    }
    return next(error);
  }
}

async function getSubjectsList(req: Request, res: Response, next: NextFunction) {
  try {
    const subjectTests = await infosService.getSubjectsList();
    return res.send(subjectTests);
  } catch (error) {
    return next(error);
  }
}

async function getSubjectTests(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (Number(id) < 1) {
    return res.sendStatus(400);
  }

  try {
    const subjectTests = await infosService.getTestsById(Number(id));
    return res.send(subjectTests);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.sendStatus(404);
    }
    return next(error);
  }
}

export {
  getFormInfos,
  getTeachersList,
  getTeacherTests,
  getSubjectsList,
  getSubjectTests,
};
