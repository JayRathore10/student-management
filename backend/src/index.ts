import express ,{Request , Response} from "express";
import cors from "cors";
import { studentsRouter } from "./routes/studentsRouter";
import { studentModel } from "./models/studentModel";

const app = express();

const PORT = 3000;
 
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/students", studentsRouter);

// dummy data for testing 
app.get("/add-dummy", async (req : Request , res : Response)=>{
  const dummyData = [
    {
      enrollNumber: "EN001",
      firstName: "Jay",
      lastName: "Rathore",
      age: 20,
      class: "B.Tech",
      section: "CSE-A",
      mobileNumber: "9876543210",
      address: "Indore, MP"
    } , 
    {
      enrollNumber: "EN002",
      firstName: "Amit",
      lastName: "Sharma",
      age: 21,
      class: "B.Tech",
      section: "CSE-B",
      mobileNumber: "9123456780",
      address: "Indore, MP"
    }
  ];

  try{
    const result = await studentModel.insertMany(dummyData);
    res.status(200).json({
      result
    });
  }catch{
    res.status(500);
  }

})


app.listen(PORT ,()=>{
  console.log(`http://localhost:${PORT}`);
})