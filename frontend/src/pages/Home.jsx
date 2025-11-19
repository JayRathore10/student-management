import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Home() {

  const [students , setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("/api/students");
        console.log(res.data);
        setStudents(res.data.students);
      } catch (err) {
        console.log(err);
      }
    }
    fetchStudents();
  }, [setStudents]);

  const navigate = useNavigate();

  const navigation = (page) => {
    navigate(page);
  }

  return (
    <>
      <button className="add-btn"
        onClick={() => navigation('/add-student')}
      >Add Student</button>
      <button className="del-btn"
        onClick={() => navigate('/delete-student')}
      >Delete Student</button>
      { 
        students && 
          students.map((st , index)=>(
            <p
              key={index}
            >{st.firstName}</p>
          ))
      }
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