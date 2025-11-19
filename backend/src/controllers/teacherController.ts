import { Request , Response } from "express";
import { teacherModel } from "../models/teacherModel";
import { compare, encryptPassword } from "../middleware/authMiddleware";
import jwt from "jsonwebtoken";

export const teacherLogin = async (req : Request , res : Response)=>{
  try{
    const {userName ,  email , password} = req.body;

    if(!userName || !email || !password){
      return res.status(404).json({
        message : "Something went wrong"
      })
    }

    const teacher = await teacherModel.findOne({email});

    if(!teacher){
      return res.status(404).json({
        message : "Something went wrong" 
      })
    }

    const teacherFound = await compare(password , teacher.password);

    if(teacherFound){
      const token = jwt.sign({email}, "secure");
      res.cookie("token" , token);
      return res.status(200).json({
        message : "teacher Login", 
        teacher
      })
    }else{
      return res.status(200).json({
        message : "no you cant log"
      })
    }
      
  }catch(err){
    return res.status(500).json({
      message : err
    })
  }
}

export const dummySignUp = async (req : Request , res : Response)=>{
  try{
    const {userName , email , password} = req.body;
    if(!userName || !email || !password){
      return res.status(404).json({
        message : "Something went wrong" 
      })
    }

    const hashedPassword = await encryptPassword(password);

    const newTeacher = await teacherModel.create({
      userName , 
      email , 
      password : hashedPassword
    });

    const token = jwt.sign({email} , "secure");
    res.cookie("token" , token);

    return res.status(200).json({
      message : "New teacher Created" ,
      newTeacher
    })

  }catch(err){
    return res.status(500).json({
      message : err
    });
  }
}

export const logOut = async(req : Request , res : Response)=>{
  try{
    res.cookie("token" , "");
    return res.status(200).json({
      message : "Log Out"
    })
  }catch(err){
    return res.status(500).json({
      messsage : err
    })
  }
}