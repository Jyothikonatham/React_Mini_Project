import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-0 h-100 hover-shadow">
        <img src={student.image || "https://via.placeholder.com/150"} className="card-img-top" alt={student.name} />
        <div className="card-body">
          <h5 className="card-title text-primary">{student.name}</h5>
          <p className="card-text"><strong>Email:</strong> {student.email}</p>
          <p className="card-text"><strong>Course:</strong> {student.course}</p>
          <Link to={`/students/${student.id}`} className="btn btn-outline-primary w-100">View Details</Link>
        </div>
      </div>
    </div>
  );
}
