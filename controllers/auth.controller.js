import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from"../models/user.model.js"
import dotenv from "dotenv";
dotenv.config();

  const JWT_SECRET = process.env.JWT_SECRET;
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();


  try {
    const { name, email, password } = req.body;

    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    
    const newUsers = await User.create(
      [{ name, email, password: hashedPassword }],
      { session }
    );


    const token = jwt.sign(
      { userId: newUsers[0]._id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUsers[0],
      },
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};


export const signIn  = async (req, res, next) => {

try{
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if ( !user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error 
  }

  const isPassword = await bcrypt.compare(password, user.password)


if(!isPassword){
  const error = new Error("Invalid password");
  error.statusCode = 401;
  throw error;
}

  const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );
res.status(200).json({
  success: true,
  message : "User signed in successfully",
  data:[
    token, 
    user
  ]
})

}catch(error){
console.error(error);
}


  res.status(501).json({ message: "Sign in not implemented yet." });
};

export const signOut = (req, res, next) => {
  res.status(501).json({ message: "Sign out not implemented yet." });
};






