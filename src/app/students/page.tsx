"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Student = {
  id: number;
  full_name: string;
  age: number;
  class: string;
};

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("students")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setStudents(data || []);
      }

      setLoading(false);
    };

    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📚 Students List</h1>

      {loading && <p>Loading students...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && students.length === 0 && (
        <p>No students found in database.</p>
      )}

      <div style={{ marginTop: "20px" }}>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h3>{student.full_name}</h3>
            <p>Age: {student.age}</p>
            <p>Class: {student.class}</p>
          </div>
        ))}
      </div>
    </div>
  );
}