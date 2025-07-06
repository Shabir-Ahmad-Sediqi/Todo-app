
import UserModel from "../models/user-model.js";

export const userProfile = async (req,res) => {
    try{
        const user = await UserModel.findByPk(req.user.id,
             {attributes: ["id", "username", "email"]})
        if (!user) return res.status(404).json({success: false, msg: "User not Found"})
        res.status(200).json({success: true, data: user})
    }catch(error){
        return res.status(500).json({success: false, msg: `Something went wrong ${error}`})
    }
}