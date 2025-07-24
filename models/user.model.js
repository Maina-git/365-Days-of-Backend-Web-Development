import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name:{
            type:String, required:[true, "User Name is required"],
        trim:true,
        minLength:2,
        maxLength:50   
    },

    email:{
       type:String,
       required:[true, "User Email is required"],
       unique:true,
       trim:true,
       lowercase:true,
       minLength:5,
       maxLength:255,
    },
    password:{
        type:String,
        required:[true, "User password is required"],
        trim:true,
        minLength:6,
    }
    }
)

const userModel = mongoose.model("User", userSchema);

export default userModel;





