
import express from 'express';
import {Registration, getUsers, Login, LogOut} from '../controllers/users_controller.js';
import { validateCreatePerson } from '../services/users_validation.js';
import { checkSchema } from 'express-validator';




const router = express.Router()

router.route('/register').post(checkSchema(validateCreatePerson),Registration);
router.route('/users').get(getUsers);
router.route('/login').post(Login)

// LOGOUT
router.route('/logout').post(LogOut)

export default router
