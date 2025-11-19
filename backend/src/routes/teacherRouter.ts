import {Router} from "express";
import { dummySignUp, teacherLogin } from "../controllers/teacherController";

export const teacherRouter = Router();

teacherRouter.post("/login" , teacherLogin);
teacherRouter.post("/dummy" , dummySignUp);