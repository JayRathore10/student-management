import express from "express";
import { studentModel } from "./models/studentModel";

const app = express();
const PORT = 5000;

app.listen(PORT ,()=>{
  console.log(`http://localhost:${PORT}`);
})