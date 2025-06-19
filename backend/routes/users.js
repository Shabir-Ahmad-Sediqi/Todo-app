
import express from 'express';
import {Registration, getUsers} from '../controllers/users_controller.js';
import { validateCreatePerson } from '../services/users_validation.js';
import { checkSchema } from 'express-validator';


const router = express.Router()

router.route('/').post(checkSchema(validateCreatePerson),Registration).get(getUsers)

export default router
