import { useContext, useState } from "react";
import { StudentsContext } from "../Context/StudentsContext";

export default function AddStudent() {
  const { addStudent } = useContext(StudentsContext);
  const [form, setForm] = useState({ name: "", email: "", course: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.course || !form.image) {
      alert("Please fill in all fields!");
      return;
    }

    addStudent(form);
    alert("Student added!");
    setForm({ name: "", email: "", course: "", image: "" }); // reset form
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f1faf1ff, #f1faf1ff)",
        padding: "20px"
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.95)"
        }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#2575fc" }}>
          Add New Student
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill shadow-sm"
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg rounded-pill shadow-sm"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill shadow-sm"
              placeholder="Course"
              value={form.course}
              onChange={e => setForm({ ...form, course: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill shadow-sm"
              placeholder="Image URL"
              value={form.image}
              onChange={e => setForm({ ...form, image: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn btn-lg w-100 fw-bold"
            style={{
              background: "linear-gradient(135deg, #2575fc, #6a11cb)",
              color: "#fff",
              borderRadius: "50px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s"
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
