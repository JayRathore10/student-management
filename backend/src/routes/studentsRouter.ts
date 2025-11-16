import { Router } from "express";
import { addNewStudent, getAllStudent } from "../contollers/studentController";

export const studentsRouter = Router();

studentsRouter.get("/" , getAllStudent );
studentsRouter.post("/add-student" , addNewStudent );
// studentsRouter.get("/delete-student");