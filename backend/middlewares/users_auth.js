import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config()

const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization

    const token = req.cookies.token;
    console.log(token , '-------')

    if (!token) {
        return res.status(401).json({ success: false, msg: "Token not found in cookies" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        res.status(500).json({ success: false, msg: `Something went wrong ${error}` })
    }
};

export default isAuthenticated