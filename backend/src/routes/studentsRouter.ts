import { Router } from "express";
import { addNewStudent, deleteStudent, getAllStudent, searchStudents } from "../contollers/studentController";

export const studentsRouter = Router();

studentsRouter.get("/" , getAllStudent );
studentsRouter.post("/add-student" , addNewStudent );
studentsRouter.get("/search", searchStudents);
studentsRouter.delete("/delete-student/:enrollNumber" , deleteStudent);
studentsRouter.get("/delete-student/:enrollNumber" , deleteStudent); // temp ;