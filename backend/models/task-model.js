import sequelize from "../postgre/db.js";
import { DataTypes } from "sequelize";

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'todos',
    timestamps: true
});

export default Todo