import { Request  , Response } from "express";
import { Parser } from "json2csv";
import { studentModel } from "../models/studentModel";

export const getAllStudent  = async (req : Request  , res : Response)=>{
  try{    
    const students = await studentModel.find();

    if(students.length === 0 ){
      return res.status(404).json({
        message : "No students"
      })
    }

    return res.status(200).json({
      message : "Students List", 
      students 
    })
  }catch(err){
    return res.status(404).json({
      message : "Not Found" , 
    })
  }
}


export const addNewStudent = async(req : Request , res : Response)=>{
  const {
    enrollNumber,
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
    enrollNumber, 
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

export const deleteStudent = async(req : Request , res: Response)=>{
  const enrollNumber : string | undefined = req.params.enrollNumber;
  try{
    const deletedStudent = await studentModel.findOneAndDelete({enrollNumber : enrollNumber});

    if(!deletedStudent){
      return  res.status(404).json({
        message : "Not Found"
      })
    }

    return res.status(200).json({
      message : "Delete a student" , 
      deletedStudent
    })
  }catch(err){
    res.status(500).json({
      message : err
    })
  }
}

export const searchStudents = async (req : Request , res : Response)=>{
  try{
    const {enrollNumber ,firstName , lastName , age , standard ,   section} = req.query;

    const filter : Record<string , any> = {};

    if(enrollNumber){
      filter.enrollNumber = enrollNumber;
    }
      
    if(firstName){
      filter.firstName = { $regex: new RegExp(firstName  as string ,  "i")};
    }

    if(lastName){
      filter.lastName = {$regex : new RegExp(lastName as string , "i")};
    }

    if(age){
      filter.age = Number(age);
    }

    if(standard){
      filter.standard =  {$regex : new RegExp(standard as string , "i")};
    }

    if(section){
      filter.section = {$regex : new RegExp(section as string , "i")}
    }

    const foundStudent = await studentModel.find(filter);

    if(foundStudent.length === 0) {
      return res.status(404).json({
        message : "Not Found"
      })
    }

    return res.status(200).json({
      message : "Founded Student" , 
      foundStudent
    })

  }
 catch(err){
  return res.status(500).json({
    message : err
  })
}
}

export const updateStudent = async (req : Request , res : Response)=>{
  try{
    const {enrollNumber} = req.params;
    const update = req.body;

    if(!enrollNumber){ 
      return res.status(400).json({
        message : "Not Found"
      })
    }

    const updateStudent = await studentModel.findOneAndUpdate({enrollNumber}, update , {new : true})

    if(!updateStudent){
      return res.status(404).json({ 
        message : "Not Found"
      })
    }

    return res.status(200).json({
      message : "Updated Student", 
      updateStudent
    })

  }catch(err){
    return res.status(500).json({
      message : err
    })
  }

}

export const exportStudentCSV = async(req : Request , res : Response)=>{
  try{
    const students = await studentModel.find();
    
    if(students.length === 0){
      return res.status(404).json({
        message : "Not Found" 
      })
    }

    const fields = [
      { label: "Enrollment Number", value: "enrollNumber" },
      { label: "First Name", value: "firstName" },
      { label: "Last Name", value: "lastName" },
      { label: "Age", value: "age" },
      { label: "Standard", value: "standard" },
      { label: "Section", value: "section" },
      { label: "Mobile Number", value: "mobileNumber" },
      { label: "Address", value: "address" },
    ];

    const json2csvParser = new Parser({fields});
    const csv = json2csvParser.parse(students);

    res.setHeader("Content-type", "text/csv");
    res.setHeader("Content-Disposition" , "attachment; filename=student.csv");

    return res.status(200).send(csv);

  }catch(err){
    return res.status(500).json({
      message : err
    })
  }
}