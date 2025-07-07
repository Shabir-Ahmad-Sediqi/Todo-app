
import UserModel from "../models/user-model.js";

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
