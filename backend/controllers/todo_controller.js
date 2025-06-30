
import Todo from "../models/task-model.js";

// Get all tasks
export const gettasks = ( async (req, res) => {
    console.log(req.user.id);
    console.log(req.user)
    try{
        const tasks = await Todo.findAll({
            where: {
                userid: req.user.id
            }
        })
        if (tasks.length == 0){
            return res.status(400).json({msg: "There are no tasks available"})
        };
        res.status(200).json({status:'success', data: tasks})
    }catch(error){
        res.status(500).json({sucess: false, msg: error.message})
    } 
});

// Add a new task to todo
export const addtasks = ( async (req, res) => {
    const {title, completed} = req.body;
    console.log(req.user.id);
    console.log(req.user)
    try{
        if (!title){
            return res.status(400).json({sucess: false, msg: "Title is required"});
        }
        const newTask = await Todo.create({
            title,
            completed: completed ?? false,
            userid: req.user.id
        });
        res.status(201).json({sucess: true, data: newTask})
    }catch(error){
        res.status(500).json({sucess: false, msg: error.message})
    }
});
// Update a todo by its ID 
export const updatetask = ( async (req, res) => {
    const { title, completed } = req.body;
    const { id } = req.params
    try{
        const todo = await Todo.findByPk(id);
        if (!todo){
            return res.status(404).json({sucess: false, msg: `No todo found with the id of ${id}`})
        }
        if (title !== undefined){
            todo.title = title
        };
        if (completed !== undefined){
            todo.completed = completed;
        }
        const updatedData = await todo.save();
        return res.status(200).json({success: true, data: updatedData});
    }catch(error){
        res.status(500).json({success: false, msg: error.message})
    }
});
// delete a todo by its ID
export const deletetask = ( async (req, res) => {
    const { id } = req.params
    try{
        const deleted = await Todo.destroy({
            where: {id}
        })
        if (deleted){
            return res.status(200).json({sucess: true, msg: `Todo deleted successfully with the id of ${id}`})
        }else{
            return res.status(404).json({sucess: false, msg: `No todo found with the id of ${id}`})
        }
    }catch(error){
        res.status(500).json({success: false, msg: error.message})
    }
});

// Toggle task's completed status
export const toggletask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Todo.findByPk(id);
        if (!task) {
            return res.status(404).json({ success: false, msg: `No task found with id ${id}` });
        }

        task.completed = !task.completed; // 🔁 toggle logic
        await task.save();

        return res.status(200).json({ success: true, data: task });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
};
