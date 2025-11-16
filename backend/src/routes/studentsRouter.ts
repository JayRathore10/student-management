import { Router } from "express";
import { addNewStudent, deleteStudent, getAllStudent } from "../contollers/studentController";

export const studentsRouter = Router();

studentsRouter.get("/" , getAllStudent );
studentsRouter.post("/add-student" , addNewStudent );
studentsRouter.delete("/delete-student/:enrollNumber" , deleteStudent);
studentsRouter.get("/delete-student/:enrollNumber" , deleteStudent);