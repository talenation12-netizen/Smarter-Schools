// export default function StudentsPage() {
//   return (
//     <div>
//       <h1>📚 Students Module</h1>
//       <p>Manage all student records here.</p>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { supabase } from "../src/lib/supabaseClient";
import { useSchool } from "../src/lib/useSchool";

/* 1. DEFINE TYPE */
type Student = {
  id: string;
  name: string;
  school_id: string;
};

export default function Students() {
  const { schoolId } = useSchool();

  /* 2. TYPED STATE */
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");

  const loadStudents = async () => {
    if (!schoolId) return;

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("school_id", schoolId);

    if (error) {
      console.log(error);
      return;
    }

    setStudents((data as Student[]) || []);
  };

  const addStudent = async () => {
    if (!name || !schoolId) return;

    await supabase.from("students").insert([
      {
        name,
        school_id: schoolId,
      },
    ]);

    setName("");
    loadStudents();
  };

  useEffect(() => {
    loadStudents();
  }, [schoolId]);

  return (
    <div>
      <h1>Students</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student name"
      />

      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}