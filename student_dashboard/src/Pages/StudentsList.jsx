import { useContext, useState } from "react";
import { StudentsContext } from "../Context/StudentsContext";
import { Link, useNavigate } from "react-router-dom";

export default function StudentsList() {
  const { students, deleteStudent } = useContext(StudentsContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4" style={{ textShadow: "0 2px 5px rgba(0,0,0,0.3)" }}>
        Students List
      </h2>

      <input
        type="text"
        className="form-control mb-4 shadow-sm"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ borderRadius: "50px", padding: "12px 20px" }}
      />

      <div className="row g-4">
        {filtered.map(student => (
          <div key={student.id} className="col-md-4">
            <div
              className="card text-center shadow-lg p-3"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(135deg, #a5e1aaff, #aec5ecff)",
                color: "white",
              }}
            >
              <img
                src={student.image || "https://via.placeholder.com/100"}
                className="shadow-sm border border-light"
                alt={student.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",       // perfect circle
                  objectFit: "cover",        // crop to fit nicely
                  display: "block",
                  margin: "auto"
                }}
              />

              <h5 className="mt-3 fw-bold">{student.name}</h5>
              <p className="text-light">{student.course}</p>

              <div className="d-flex justify-content-center gap-2 mt-3">
                <Link
                  className="btn btn-light btn-sm fw-bold shadow-sm"
                  to={`/students/${student.id}`}
                  style={{ borderRadius: "50px", color: "#2575fc" }}
                >
                  View
                </Link>
                <button
                  className="btn btn-danger btn-sm fw-bold shadow-sm"
                  style={{ borderRadius: "50px" }}
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
