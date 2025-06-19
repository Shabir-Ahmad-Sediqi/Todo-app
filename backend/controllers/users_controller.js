import { where } from "sequelize";
import UserModel from "../models/user-model.js";
import { hashPassword, comparePassword } from "../services/hash_password.js";
import { validationResult, matchedData } from "express-validator";
import jwt from "jsonwebtoken"


export const Registration = async (req,res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) return res.status(400).send(result.array())
    const userData = matchedData(req)
    const {username, email, password} = userData;

    const existingEmail = await UserModel.findOne({where: {email: email}});
    //check if email is already in use
    if (existingEmail) return res.status(400).json({msg: "Email already in use"});
    // check if username us available
    const existingUsername = await UserModel.findOne({where:  {username: username}});;
    if (existingUsername) return res.status(400).json({msg: "Username is taken"});
    // check if all fields are filled
    if (!(username &&  email && password)){
        return res.status(400).json({"success": false, msg: "All fields are required"})
    }

    // Hash the password
    userData.password = await hashPassword(password);
    try{
        const createUser = await UserModel.create(userData);
        res.status(201).json({sucess: true, user: createUser})
    }catch(error){
        res.status(500).json({success: false, msg: `Error creating user ${error.message}`})
    }
  
    
};

export const Login = async (req,res) => {
    const {email, password} = req.body;
    if (!(email && password)){
        res.status(400).json({success: false, msg: "all fields are required"})
    };

    const findUser = await UserModel.findOne({where: {email: email}})
    if (!findUser){
        res.status(404).json({success: false, msg: "User not found, please register yourself"})
    };

    if (!comparePassword(password, findUser.password)){
        res.status(401).json({success: false, msg: "Password is incorrect"})
    }

    // generate jwt here 
    
}

export const getUsers = async (req,res) => {
    try{
    const users = await UserModel.findAll()
    res.status(200).json({success: true, users: users})
    }
    catch(error){
        res.status(500).json({success: false, msg: error.message})
    }
}
