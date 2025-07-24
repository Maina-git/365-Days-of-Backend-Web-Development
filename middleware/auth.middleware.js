import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

export const authorize = async (req, res, next)=>{
try{
let token;

if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token = req.headers.authorization.split('')[1];
}

if (!token) return res.status(401).json({message:"Unauthorized"});

const decoded = jwt.verify(token, JWT_SECRET);

const user = await User.findBy(decoded.userId);

req.user = user;

next();
}catch(error){
res.status(401).json({message: "Unauthorized", error:error.message})
}
}