import { createContext, useState, useEffect } from "react";
import studentsData from "../data/students.json";

export const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(studentsData);
    }
  }, []);

  // Add student
  const addStudent = (newStudent) => {
    const studentWithId = { ...newStudent, id: Date.now() };
    const updated = [...students, studentWithId];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  // Delete student
  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const updated = students.filter(s => s.id !== id);
      setStudents(updated);
      localStorage.setItem("students", JSON.stringify(updated));
    }
  };

  // Update student
  const updateStudent = (id, updatedData) => {
    const updated = students.map(s =>
      s.id === id ? { ...s, ...updatedData } : s
    );
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  return (
    <StudentsContext.Provider value={{ students, addStudent, deleteStudent, updateStudent }}>
      {children}
    </StudentsContext.Provider>
  );
}
