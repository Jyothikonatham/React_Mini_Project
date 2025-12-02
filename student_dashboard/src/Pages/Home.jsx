import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f1faf1ff, #f1faf1ff)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "40px",
      }}
    >
      <div className="container text-center py-5">
        <h1 className="fw-bold mb-3" style={{ fontSize: "3rem", textShadow: "0 4px 15px rgba(0,0,0,0.3)" ,color:"red"}}>
          Welcome to Student Dashboard
        </h1>
        <p className="lead mb-4" style={{ opacity: 0.9 ,color:"#ed58b4ff"}}>
          Manage students, track courses, and view detailed profiles in real-time.
        </p>

        {/* CTA Buttons */}
        <div className="mb-5">
          <Link
            to="/students"
            className="btn btn-light btn-lg mx-2 shadow"
            style={{ borderRadius: "50px", fontWeight: "600", padding: "12px 35px", color: "#2575fc" }}
          >
            View Students
          </Link>
          <Link
            to="/add-student"
            className="btn btn-outline-light btn-lg mx-2 shadow"
            style={{ borderRadius: "50px", fontWeight: "600", padding: "12px 35px" ,color: "#e46163ff" }}
          >
            Add Student
          </Link>
        </div>

        {/* Hero Image */}
        <div className="d-flex justify-content-center mb-5">
          <img
            src="https://img.freepik.com/free-vector/man-desk-with-laptop_23-2148484791.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Dashboard"
            className="img-fluid shadow-lg"
            style={{ width: "80%", maxHeight: "420px", borderRadius: "20px", objectFit: "cover" }}
          />
        </div>

        {/* Feature Cards */}
        <div className="row g-4 mt-4">
          {[
            { icon: "🔍", title: "Smart Search", desc: "Find any student instantly using intelligent filtering." },
            { icon: "📘", title: "Course Insights", desc: "See student-course mapping and manage enrollments easily." },
            { icon: "📊", title: "Dashboard Analytics", desc: "Track recent activity, new admissions and updates." },
          ].map((f, idx) => (
            <div key={idx} className="col-md-4">
              <div className="p-4 rounded shadow" style={{color:"black",background: "rgba(241, 214, 231, 0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(23, 116, 237, 0.2)" }}>
                <h4 className="fw-bold">{f.icon} {f.title}</h4>
                <p className="mt-2">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
