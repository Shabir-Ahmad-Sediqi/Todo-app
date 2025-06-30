import dotenv from "dotenv";
import UserModel from "../models/user-model.js";
import { hashPassword, comparePassword } from "../services/hash_password.js";
import { validationResult, matchedData } from "express-validator";
import jwt from "jsonwebtoken";

dotenv.config();

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

            // Generate jwt here to automaticlly login the user
        const token = jwt.sign(
            {id: createUser.id, email},
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            }
        )
        res.status(201).json(
            {
            sucess: true,
            user: {
                id: createUser.id,
                username: createUser.username,
                email: createUser.email
           },
            token
    }) 
    }catch(error){
        res.status(500).json({success: false, msg: `Error creating user ${error.message}`})
    }
};

export const Login = async (req,res) => {
    const {email, password} = req.body;
    if (!(email && password)){
         return res.status(400).json({success: false, msg: "all fields are required"})
    };

    try{
        const findUser = await UserModel.findOne({where: {email: email}})
        if (!findUser){
             return res.status(404).json({success: false, msg: "User not found, please register yourself"})
        };

        const isMatch = await comparePassword(password, findUser.password) 
        if (!isMatch){
            return res.status(401).json({success: false, msg: "Password is incorrect"})
        }
        // generate jwt here
        const token = jwt.sign(
            {id: findUser.id, email: findUser.email},
            process.env.JWT_SECRET,
            {
                 expiresIn: "2h"
            }
            );
        // cookie section
        const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
        httpOnly: true
        };


        res.status(200).cookie("token", token, options).json({
            success: true,
            data: {
                id: findUser.id,
                username: findUser.username,
                email: findUser.email
                }
            })

        console.log(req.cookies)

    }catch(error){
        return res.status(500).json({success: false, msg: `Something went wrong ${error}`})
    }

        
    }
export const getUsers = async (req,res) => {
    try{
        const users = await UserModel.findAll()
        res.status(200).json({success: true, users: users})
    }
    catch(error){
        res.status(500).json({success: false, msg: error.message})
    }
};

export const LogOut = (req,res) => {
    res.clearCookie("token");
    res.status(200).json({success: true, msg: "Successfully Logged out"})
};
