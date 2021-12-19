import { Router } from 'express';
import * as infosController from '../controllers/infosController';

const router = Router();

router.get('/infos', infosController.getFormInfos);
router.get('/infos/tests/teachers', infosController.getTeachersList);
router.get('/infos/tests/teachers/:id', infosController.getTeacherTests);
router.get('/infos/tests/subjects', infosController.getSubjectsList);
router.get('/infos/tests/subjects/:id', infosController.getSubjectTests);

export default router;
