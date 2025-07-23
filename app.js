//create the express js server
import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
//import authRouter from "./routes/auth.routes.js"
import authRouter from "./routes/auth.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import connectDB from "./db/db.js"
import errorMiddleware from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"

dotenv.config();
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(cors());
app.use(cookieParser());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use(errorMiddleware);

app.get("/", (req, res)=>{
res.status(200).json({message:"welcome to the Subscription Tracker API"});
});
const PORT=process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server running on http://localhost:3000")
});

connectDB();
export default app;















