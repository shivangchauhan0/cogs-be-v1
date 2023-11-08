import express from 'express';
import { deleteDatasetByIdController, getAllDatasetsController, getDatasetByIdController, saveDatasetContoller, updateDatasetContoller } from '../controllers/dataset.controller';
import { validateRequestBody, validateRequestPath } from '../utils/middlewares/request-validation-middleware';
import { saveDatasetSchema } from '../schemas/dataset.schema';

const router = express.Router();

router.get('/', getAllDatasetsController);
router.post('/', validateRequestBody(saveDatasetSchema), saveDatasetContoller);
router.get('/:id', validateRequestPath(), getDatasetByIdController);
router.put('/:id', validateRequestPath(), validateRequestBody(saveDatasetSchema), updateDatasetContoller);
router.delete('/:id', validateRequestPath(), deleteDatasetByIdController);

export default router;