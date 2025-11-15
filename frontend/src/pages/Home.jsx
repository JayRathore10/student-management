import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Home(){

  useEffect(()=>{
    try{
      const students = axios.get("/api/students");
      console.log(students.data);
    }catch(err){
      console.log(err);
    }
  } , []);

  const navigate = useNavigate();

  const navigation = (page)=>{
    navigate(page);
  }

  return(
    <>
      <button className="add-btn"
        onClick={() => navigation('/add-student')}
      >Add Student</button>
      <button className="del-btn" 
        onClick={() => navigate('/delete-student')}
      >Delete Student</button>
    </>
  );
}

/**
 * 
 * Add Student 
 * Delete Student 
 * 
 * List of all students 
 * 
 */