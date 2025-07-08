
import UserModel from "../models/user-model.js";
import { hashPassword } from "../services/hash_password.js";
import { validationResult, matchedData } from "express-validator";


export const userProfile = async (req,res) => {
    try{
        const user = await UserModel.findByPk(req.user.id,
             {attributes: ["id", "username", "email", "bio"]})
        if (!user) return res.status(404).json({success: false, msg: "User not Found"})
        res.status(200).json({success: true, data: user})
    }catch(error){
        return res.status(500).json({success: false, msg: `Something went wrong ${error}`})
    }
};

export const userProfileBio = async (req,res) => {
    const {bio} = req.body
    const userid = req.user.id
    if(!bio || bio.trim() === " ") return res.status(400).json({success: false, msg: "Bio is empty"})

    try{
        const user = await UserModel.findByPk(userid);
        if (!user) return res.status(404).json({success: false, msg: "User not Found"});
        user.bio = bio
        await user.save()
        res.status(200).json({success: true, data: user})
    }catch(error){
        return res.status(500).json({success: false, msg: `Error from bio ${error}`})
    }
}

export const changePassword = async (req,res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) return res.status(400).send(result.array())
    const userData = matchedData(req)
    const { password } = userData;
    const confirmPassword = req.body.confirmPassword
    console.log(password)
    console.log(confirmPassword)
    if (!password || password.trim() === ""){
        return res.status(400).json({success: false, msg: "Password can't be empty"})
    }
    if (password !== confirmPassword){
        return res.status(400).json({success: false, msg: "Password with confime password does not match"})
    }
    try{
        const finduser = await UserModel.findByPk(req.user.id);
        if (!finduser) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }
        finduser.password = await hashPassword(password)
        await finduser.save()
        res.status(200).json({success: true, msg: "Password Changed Successfully"})
    }catch(error){
        res.status(500).json({success: false, msg: `change password problem ${error}`})
    }

}
