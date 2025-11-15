import { Router } from "express";
import { getAllStudent } from "../contollers/studentController";

export const studentsRouter = Router();

studentsRouter.get("/" , getAllStudent );