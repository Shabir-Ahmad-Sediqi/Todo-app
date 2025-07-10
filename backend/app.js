
import sequelize from './postgre/db.js';
import express from 'express';
import dotenv from 'dotenv';
import todo_route from './routes/todo_route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import users from './routes/users.js'
import isAuthenticated from './middlewares/users_auth.js';
const app = express()

// middlewares 
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',   // frontend origin
  credentials: true                 // allow sending cookies
}));


// register routes here
app.use('/api/tasks',isAuthenticated ,todo_route);
app.use('/api', users);

dotenv.config();
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})