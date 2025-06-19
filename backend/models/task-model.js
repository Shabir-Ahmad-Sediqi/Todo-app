import sequelize from "../postgre/db.js";
import { DataTypes } from "sequelize";
import UserModel from "./user-model.js";

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
},{
    tableName: 'todos',
    timestamps: true
});

// setub associations

UserModel.hasMany(Todo, {foreignKey: 'userid', onDelete: 'CASCADE'});
Todo.belongsTo(UserModel, {foreignKey: 'userid'})

export default Todo