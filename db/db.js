import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
 
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Mongo db connected");
    }catch(err){
console.error(err);
    }
}

export default connectDB;
