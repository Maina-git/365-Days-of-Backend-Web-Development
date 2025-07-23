import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => res.status(201).json({message:"Get all subscriptions"}));

subscriptionRouter.get("/:id", (req, res) => res.status(201).json({message:"Get all subscriptions details"}));

subscriptionRouter.post("/", (req, res) => res.status(201).json({message:"CREATE subscriptions"}));

subscriptionRouter.put("/:id", (req, res) => res.status(201).json({message:"UPDATE a subscription"}));

subscriptionRouter.delete("/:id", (req, res) => res.status(201).json({message:"DELETE a subscription"}));

subscriptionRouter.get("/user/:id", (req, res) => res.status(201).json({message:"Get all user subscriptions"}));

subscriptionRouter.put("/:id/cancel", (req, res) => res.status(201).json({message:"CANCEL  subscriptions"}));

subscriptionRouter.get("/upcoming-renewals", (req, res) => res.status(201).json({message:"GET upcoming renewals"}));


export default subscriptionRouter





