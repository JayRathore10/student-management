import mongoose from "mongoose";

mongoose.connect(`mongodb://localhost:27017/studentsDB`);

const studentSchema = new mongoose.Schema({
  enrollmentNumber : String ,
  firstName : String , 
  lastName : String , 
  age : Number , 
  standard : String , 
  section : String , 
  mobileNumber : String , 
  address : String 
});

export const studentModel = mongoose.model("student" , studentSchema);