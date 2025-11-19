import {Router} from "express";
import { dummySignUp, logOut, teacherLogin } from "../controllers/teacherController";

export const teacherRouter = Router();

teacherRouter.post("/login" , teacherLogin);
teacherRouter.post("/dummy" , dummySignUp);
teacherRouter.get("/logout"  , logOut );