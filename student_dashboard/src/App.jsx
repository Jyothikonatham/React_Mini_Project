import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import StudentsList from "./Pages/StudentsList.jsx";
import AddStudent from "./Pages/AddStudent.jsx";
import StudentDetails from "./Pages/StudentDetails.jsx";
import About from "./Pages/About.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
