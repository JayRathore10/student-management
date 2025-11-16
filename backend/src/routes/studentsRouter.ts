import { Router } from "express";
import { addNewStudent, deleteStudent, exportStudentCSV, getAllStudent, searchStudents, updateStudent } from "../controllers/studentController";

export const studentsRouter = Router();

studentsRouter.get("/" , getAllStudent );
studentsRouter.post("/add-student" , addNewStudent );
studentsRouter.get("/search", searchStudents);
studentsRouter.get("/export-csv", exportStudentCSV);
studentsRouter.patch("/update-student/:enrollNumber" , updateStudent);
studentsRouter.delete("/delete-student/:enrollNumber" , deleteStudent);
studentsRouter.get("/delete-student/:enrollNumber" , deleteStudent); // temp ;