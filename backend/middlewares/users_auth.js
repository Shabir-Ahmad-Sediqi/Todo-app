import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config()

const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization

    // check if token exist and starts with Bearer
    if (!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(401).json({success: false, msg: "Authorization header is missing or invalid token"})
    };

    const token = authHeader.split(" ")[1]

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    }catch(error){
        res.status(500).json({success: false, msg: `Something went wrong ${error}`})
    }   
};

export default isAuthenticated