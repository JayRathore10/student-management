import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  userName : String , 
  email : String , 
  password : String , 
});

export const teacherModel = mongoose.model("teacher", teacherSchema);