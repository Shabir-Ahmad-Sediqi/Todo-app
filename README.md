# MERN To-Do App

A simple full-stack To-Do application built with **PostgreSQL, Express, React, Node.js** (MERN stack).

## Features

- Add, edit, delete tasks
- Mark tasks as completed
- Responsive UI built with React and Tailwind CSS
- Backend API with Express.js and Sequelize (PostgreSQL)
- CRUD operations with async/await
- Clean and modern UI

## Technologies Used

React, Tailwind CSS, Express.js, Sequelize, PostgreSQL, Axios

## Installation and Running the App

Clone the repository and navigate inside:

```bash
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
Install dependencies separately for backend and frontend:

bash
Copy
Edit

Note: Before installing dependencies first delete package-lock-json, it will save you alot of time.

# Backend
cd Mern-Todo-App
npm install

# Frontend
cd ../frontend/vite-project
npm install
Set up your environment variables by creating a .env file inside the backend folder. Include your Postgres connection string and port:

ini
Copy
Edit
DATABASE_URL=your_postgres_connection_string
PORT=5000
Start backend and frontend servers in separate terminals:

bash
Copy
Edit
# Backend server
cd Mern-Todo-App
npm run dev

# Frontend server
cd ../frontend/vite-project
npm run dev
Open your browser and visit http://localhost:3000 to see the app.

Usage
Use the input field to add new tasks.

Click the pencil icon to edit a task inline.

Click the red × button to delete a task.

Toggle the checkbox to mark tasks as completed or incomplete.

Contribution
Feel free to open issues or submit pull requests to improve the app.


Extensions that i am using are the following
