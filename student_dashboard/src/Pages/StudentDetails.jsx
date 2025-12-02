import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { StudentsContext } from "../Context/StudentsContext";

export default function StudentDetails() {
  const { id } = useParams();
  const { students, deleteStudent } = useContext(StudentsContext);

  const student = students.find(s => s.id === parseInt(id));

  if (!student) {
    return <h2 className="text-center mt-5">Student Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", margin: "auto" }}>
        <img
          src={student.image}
          className="rounded-circle mx-auto mb-3 border"
          width="120"
        />
        <h3 className="text-center">{student.name}</h3>
        <p className="text-center text-muted">{student.course}</p>
        <p className="text-center">{student.email}</p>

        <div className="d-flex gap-2 mt-3">
          <Link to="/students" className="btn btn-secondary w-50">Back</Link>
          <button
            className="btn btn-danger w-50"
            onClick={() => {
              deleteStudent(student.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
