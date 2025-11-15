import { Router } from "express";
import { getAllStudent } from "../contollers/studentController";

export const studentsRouter = Router();

studentsRouter.get("/" , getAllStudent );
studentsRouter.get("/add-student");
studentsRouter.get("/delete-student");