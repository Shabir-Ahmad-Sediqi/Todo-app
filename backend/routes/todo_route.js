import express from 'express'
import
 { gettasks,
   addtasks,
   updatetask,
   deletetask,
   toggletask
 } from '../controllers/todo_controller.js'

const router = express.Router();

router.route('/').get(gettasks).post(addtasks);
router.route('/:id').patch(updatetask).delete(deletetask);
router.route('/:id/toggle').patch(toggletask);


export default router