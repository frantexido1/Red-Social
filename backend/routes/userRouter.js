import { Router } from 'express';
import UserController from '../controllers/userController.js';

const user = new UserController();
const router = Router();

router.get('/register', user.register.bind(user));
router.get('/login', user.login.bind(user));













export default router;