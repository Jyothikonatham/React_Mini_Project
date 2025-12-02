import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentsContext } from "../Context/StudentsContext";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent } = useContext(StudentsContext);

  const student = students.find(s => s.id === parseInt(id));
  const [form, setForm] = useState({ name: "", email: "", course: "", image: "" });

  useEffect(() => {
    if (student) setForm(student);
  }, [student]);

  if (!student) return <h2 className="text-center mt-5">Student Not Found</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(student.id, form);
    alert("Student updated!");
    navigate("/students");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4 text-primary" style={{ textShadow: "0 2px 5px rgba(0,0,0,0.3)" }}>
        Edit Student
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3 shadow-sm"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={{ borderRadius: "50px", padding: "12px 20px" }}
        />

        <input
          className="form-control mb-3 shadow-sm"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          style={{ borderRadius: "50px", padding: "12px 20px" }}
        />

        <input
          className="form-control mb-3 shadow-sm"
          placeholder="Course"
          value={form.course}
          onChange={e => setForm({ ...form, course: e.target.value })}
          style={{ borderRadius: "50px", padding: "12px 20px" }}
        />

        <input
          className="form-control mb-3 shadow-sm"
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
          style={{ borderRadius: "50px", padding: "12px 20px" }}
        />

        <button
          type="submit"
          className="btn btn-primary w-100 shadow-lg fw-bold"
          style={{ borderRadius: "50px", padding: "12px 0", fontSize: "1.1rem" }}
        >
          Update Student
        </button>
      </form>
    </div>
  );
}
