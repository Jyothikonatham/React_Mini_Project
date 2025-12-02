export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #f0f4ff, #d9e4ff)",
        color: "#333",
      }}
    >
      {/* Main Content */}
      <div className="container py-5">
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#1a1a1a",
            textShadow: "0 3px 10px rgba(0,0,0,0.15)",
          }}
        >
          About This Project
        </h2>

        <p
          className="lead text-center mb-5"
          style={{ opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}
        >
          Welcome to the <strong>Student Management Dashboard</strong> – a modern and responsive web application built using <strong>React</strong>, <strong>Context API</strong>, and <strong>Bootstrap</strong>. Effortlessly manage students, track courses, monitor activity, and perform CRUD operations all in one place.
        </p>

        {/* Features Cards */}
        <div className="row g-4 text-dark">
          {[
            { title: "📋 View Students", desc: "Browse, search, and filter students in real-time.", bg: "rgba(255,255,255,0.9)" },
            { title: "➕ Add / Edit Students", desc: "Add new students or update their information easily.", bg: "rgba(255, 220, 90, 0.9)" },
            { title: "🗑 Delete Students", desc: "Remove students safely while keeping your data clean.", bg: "rgba(255,180,180,0.9)" },
            { title: "📊 Dashboard Analytics", desc: "Monitor student activity and course enrollment effortlessly.", bg: "rgba(180,255,220,0.9)" },
            { title: "💾 Persistent Storage", desc: "All student data is saved in localStorage for reliable state management.", bg: "rgba(200,200,255,0.9)" },
            { title: "📱 Responsive Design", desc: "Optimized for desktop, tablet, and mobile devices.", bg: "rgba(255,200,255,0.9)" },
          ].map((feature, i) => (
            <div key={i} className="col-md-4">
              <div
                className="card p-4 h-100 shadow-lg"
                style={{
                  borderRadius: "20px",
                  background: feature.bg,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-5"
          style={{ fontSize: "1rem", opacity: 0.85, maxWidth: "700px", margin: "0 auto" }}
        >
          This project is perfect for learning <strong>React</strong> with <strong>Context API</strong>, dynamic routing, and building a **modern, interactive dashboard** UI.
        </p>
      </div>

      {/* Footer */}
      <footer
        className="text-center py-3 mt-auto"
        style={{
          background: "#1a1a1a",
          color: "#fff",
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
      >
        &copy; 2025 Jyothi | All Rights Reserved
      </footer>
    </div>
  );
}
