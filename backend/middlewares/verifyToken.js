import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export const isloggedIn = (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ success: false, msg: "Not Authenticated" });

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ success: true, user: decode });
    } catch (error) {
        res.status(500).json({ success: false, msg: `Check backend ${error}` });
    }
};
