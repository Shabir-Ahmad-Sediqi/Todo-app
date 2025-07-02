import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const Authenticator = (req,res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({sucess: false, msg: "You are not Authorized"});

    try{
    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode
    next()
    }catch(error){
        return res.status(401).json({sucess: false, msg: `Invalid token or something ${error}`});
    }
}

