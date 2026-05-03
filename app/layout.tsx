import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Smarter Schools",
  description: "School Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif" }}>
        
        {/* NAVBAR */}
        <nav
          style={{
            padding: "15px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link href="/">🏠 Home</Link>
          <Link href="/students">📚 Students</Link>
        </nav>

        {/* PAGE CONTENT */}
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}