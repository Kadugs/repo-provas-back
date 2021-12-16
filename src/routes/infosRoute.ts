import { Router } from 'express';
import * as infosController from '../controllers/infosController';

const router = Router();

router.get('/infos', infosController.getInfos);

export default router;
