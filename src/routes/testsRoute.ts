import { Router } from 'express';
import * as testsController from '../controllers/testsController';

const router = Router();

router.post('/tests', testsController.addTest);

export default router;
