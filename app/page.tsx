import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        📚 Smarter Schools Dashboard
      </h1>

      <p style={{ marginTop: "10px", color: "#555" }}>
        Welcome to your school management system.
      </p>

      {/* QUICK NAV CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        
        <Link
          href="/students"
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <h3>📚 Students</h3>
          <p>Manage student records</p>
        </Link>

        <Link
          href="/fees"
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <h3>💰 Fees</h3>
          <p>Track payments & balances</p>
        </Link>

        <Link
          href="/reports"
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <h3>📊 Reports</h3>
          <p>View analytics & summaries</p>
        </Link>

      </div>
    </div>
  );
}