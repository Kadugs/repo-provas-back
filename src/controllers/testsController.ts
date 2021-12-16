import { Request, Response, NextFunction } from 'express';
import testValidation from '../validations/testValidation';
import { HttpStatusCode } from '../enums/http.enum';
import ConflictError from '../errors/ConflictError';
import * as testsService from '../services/testsService';

async function addTest(req: Request, res: Response, next: NextFunction) {
  const testBody = req.body;
  const isTestValid = testValidation(testBody);
  if (!isTestValid) {
    return res.sendStatus(HttpStatusCode.BAD_REQUEST);
  }
  try {
    await testsService.addTest(testBody);
    return res.sendStatus(HttpStatusCode.CREATED);
  } catch (error) {
    console.error(error.message);
    if (error instanceof ConflictError) {
      return res.sendStatus(HttpStatusCode.CONFLICT);
    }
    return next(error);
  }
}

export { addTest };
