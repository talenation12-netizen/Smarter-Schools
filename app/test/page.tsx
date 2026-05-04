"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function TestPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const testSupabase = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("students")
        .select("*")
        .limit(5);

      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }

      setLoading(false);
    };

    testSupabase();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Supabase Test Page</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

















// "use client";

// import { useEffect } from "react";
// import { supabase } from "@/lib/supabaseClient";

// export default function TestPage() {
//   useEffect(() => {
//     async function test() {
//       const { data, error } = await supabase
//         .from("students")
//         .select("*");

//       console.log("DATA:", data);
//       console.log("ERROR:", error);
//     }

//     test();
//   }, []);

//   return <h1>Supabase Test Running... check console</h1>;
// }