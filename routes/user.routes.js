import { Router} from "express";
import { getUser } from "../controllers/user.controller.js";
import { getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);


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

