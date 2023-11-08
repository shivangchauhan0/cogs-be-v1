import express from 'express';
import { validateRequestBody, validateRequestPath } from '../utils/middlewares/request-validation-middleware';
import { getAllTemplatesController, getTemplateByIdController, saveTemplateContoller } from '../controllers/template.contoller';
import { saveTemplateSchema } from '../schemas/template.schema';

const router = express.Router();

router.get('/', getAllTemplatesController);
router.get('/:id', validateRequestPath(), getTemplateByIdController);
router.post('/', validateRequestBody(saveTemplateSchema), saveTemplateContoller);

export default router;