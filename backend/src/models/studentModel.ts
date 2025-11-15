import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  enrollNumber : String ,
  firstName : String , 
  lastName : String , 
  age : Number , 
  class : String , 
  section : String , 
  mobileNumber : String , 
  address : String 
});

export const studentModel = mongoose.model("student" , studentSchema);