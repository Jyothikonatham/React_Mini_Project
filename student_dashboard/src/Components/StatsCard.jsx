export default function StatsCard({ title, value, icon }) {
  return (
    <div className="col-md-4">
      <div className="card text-center shadow-sm p-4">
        <div style={{ fontSize: "35px" }}>{icon}</div>
        <h4 className="mt-2">{title}</h4>
        <h2 className="text-primary">{value}</h2>
      </div>
    </div>
  );
}
