
import sequelize from './postgre/db.js';
import express from 'express';
import dotenv from 'dotenv';
import todo_route from './routes/todo_route.js'
import cors from 'cors'
import users from './routes/users.js'
const app = express()

// middlewares 
app.use(express.json());
app.use(cors());

// register routes here
app.use('/api/tasks', todo_route);
app.use('/api/users', users);

dotenv.config();
const PORT = process.env.PORT || 5000

// sunc models

sequelize.sync()
    .then(() => {
        console.log("all models were synced successfully")
    })
    .catch((error) => {
        console.log(`Error syncing models ${error}`)
    })


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})