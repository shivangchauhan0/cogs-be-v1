import express from 'express';
import { getAllUsersController, createUserController } from '../controllers/user.controller';

const router = express.Router();

router.get('/', getAllUsersController);
router.post('/', createUserController);

export default router;