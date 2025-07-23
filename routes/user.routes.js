import { Router} from "express";


const userRouter = Router();

userRouter.get("/", (req, res)=>{
    res.status(400).json({message:"get all users"})
});

userRouter.get("/:id", (req, res)=>{
    res.status(400).json({message:"get user details"})
});


userRouter.post("/", (req, res)=>{
    res.status(400).json({message:"CREATE a new user"})
});

userRouter.put("/:id", (req, res)=>{
    res.status(400).json({message:"UPDATE user"})
});

userRouter.delete("/:id", (req, res)=>{
    res.status(400).json({message:"DELETE user"})
});


export default userRouter;

