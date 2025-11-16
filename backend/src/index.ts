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
app.use(express.urlencoded({extended : true}));

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
  },
  {
    enrollNumber: "EN002",
    firstName: "Amit",
    lastName: "Sharma",
    age: 21,
    class: "B.Tech",
    section: "CSE-B",
    mobileNumber: "9123456780",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN003",
    firstName: "Rahul",
    lastName: "Verma",
    age: 22,
    class: "B.Tech",
    section: "CSE-A",
    mobileNumber: "9988776655",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN004",
    firstName: "Sneha",
    lastName: "Patel",
    age: 20,
    class: "B.Tech",
    section: "CSE-C",
    mobileNumber: "9871234560",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN005",
    firstName: "Ankit",
    lastName: "Gupta",
    age: 21,
    class: "B.Tech",
    section: "CSE-B",
    mobileNumber: "9123987650",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN006",
    firstName: "Priya",
    lastName: "Mehta",
    age: 20,
    class: "B.Tech",
    section: "CSE-A",
    mobileNumber: "9812345670",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN007",
    firstName: "Vikram",
    lastName: "Kumar",
    age: 22,
    class: "B.Tech",
    section: "CSE-C",
    mobileNumber: "9876541230",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN008",
    firstName: "Riya",
    lastName: "Singh",
    age: 21,
    class: "B.Tech",
    section: "CSE-B",
    mobileNumber: "9123678901",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN009",
    firstName: "Aditya",
    lastName: "Joshi",
    age: 20,
    class: "B.Tech",
    section: "CSE-A",
    mobileNumber: "9876501234",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN010",
    firstName: "Pooja",
    lastName: "Shukla",
    age: 21,
    class: "B.Tech",
    section: "CSE-C",
    mobileNumber: "9123459876",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN011",
    firstName: "Siddharth",
    lastName: "Chauhan",
    age: 22,
    class: "B.Tech",
    section: "CSE-B",
    mobileNumber: "9988123456",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN012",
    firstName: "Neha",
    lastName: "Tiwari",
    age: 20,
    class: "B.Tech",
    section: "CSE-A",
    mobileNumber: "9876123450",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN013",
    firstName: "Karan",
    lastName: "Bansal",
    age: 21,
    class: "B.Tech",
    section: "CSE-C",
    mobileNumber: "9123458765",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN014",
    firstName: "Isha",
    lastName: "Verma",
    age: 20,
    class: "B.Tech",
    section: "CSE-B",
    mobileNumber: "9876540987",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN015",
    firstName: "Rohan",
    lastName: "Agarwal",
    age: 22,
    class: "B.Tech",
    section: "CSE-A",
    mobileNumber: "9988771122",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN016",
    firstName: "Sakshi",
    lastName: "Khandelwal",
    age: 21,
    class: "B.Tech",
    section: "CSE-C",
    mobileNumber: "9123451122",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN017",
    firstName: "Manish",
    lastName: "Chopra",
    age: 20,
    class: "B.Tech",
    section: "CSE-B",
    mobileNumber: "9876543321",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN018",
    firstName: "Anjali",
    lastName: "Pandey",
    age: 22,
    class: "B.Tech",
    section: "CSE-A",
    mobileNumber: "9988774433",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN019",
    firstName: "Shubham",
    lastName: "Rathi",
    age: 21,
    class: "B.Tech",
    section: "CSE-C",
    mobileNumber: "9123455566",
    address: "Indore, MP"
  },
  {
    enrollNumber: "EN020",
    firstName: "Tanya",
    lastName: "Malhotra",
    age: 20,
    class: "B.Tech",
    section: "CSE-B",
    mobileNumber: "9876547788",
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