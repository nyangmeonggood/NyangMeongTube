import express from "express";
import routes from "../routes";
import { changePassword, editProfile, users, usersDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users)
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePassword, changePassword)
userRouter.get(routes.userDetail(), usersDetail)

export default userRouter;