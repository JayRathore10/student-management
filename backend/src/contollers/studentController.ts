import { Request  , Response } from "express";
import { studentModel } from "../models/studentModel";

export const getAllStudent  = async (req : Request  , res : Response)=>{
  try{    
    const students = await studentModel.find();
    res.send(students);
    res.status(200).json({
      message : "Students List", 
      students 
    })
  }catch(err){
    res.status(404).json({
      message : "Not Found" , 
    })
  }
}