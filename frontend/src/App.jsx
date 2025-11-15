import { Route ,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddStudentPage } from "./pages/AddStudentPage";
import { DeleteStudent } from "./pages/DeleteStudent";
function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-student" element={<AddStudentPage />} />
        <Route path="/delete-student" element={<DeleteStudent/>} />
      </Routes>
    </>
  );
}

export default App;