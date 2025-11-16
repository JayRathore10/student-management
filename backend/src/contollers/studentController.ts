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


export const addNewStudent = async(req : Request , res : Response)=>{
  const {
    enrollmentNumber,
    firstName ,
    lastName , 
    age , 
    standard , 
    section , 
    mobileNumber , 
    address
  } = req.body;

  const ageNum : Number | undefined = Number(age);

  try{
    const newStudent = await studentModel.create({
    enrollmentNumber, 
    firstName  , 
    lastName , 
    age : ageNum, 
    standard , 
    section , 
    mobileNumber, 
    address
  })
    res.status(200).json({
      message : "New Student Created",
      newStudent
    })
  }catch(err){
    res.status(500).json({
      message : err
    })
  }
}

