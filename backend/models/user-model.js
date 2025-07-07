import sequelize from "../postgre/db.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define('UserModel', {
    username: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 14]
        }
    },
    email: {
        type: DataTypes.STRING(),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    bio: {
        type: DataTypes.TEXT(),
        defaultValue: "",
    }
},{
    tableName: 'Users'
})

export default UserModel
