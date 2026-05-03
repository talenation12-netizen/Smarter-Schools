// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";

// export default function TestPage() {
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const testSupabase = async () => {
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("students")
//         .select("*")
//         .limit(5);

//       if (error) {
//         setError(error.message);
//         console.error("Supabase Error:", error);
//       } else {
//         setData(data);
//         console.log("Supabase Data:", data);
//       }

//       setLoading(false);
//     };

//     testSupabase();
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h1>Supabase Test Page</h1>

//       {loading && <p>Loading data from Supabase...</p>}

//       {error && (
//         <p style={{ color: "red" }}>
//           ❌ Error: {error}
//         </p>
//       )}

//       {data && (
//         <div>
//           <h3>✅ Data received:</h3>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}

//       {!loading && !error && data?.length === 0 && (
//         <p>No students found in database.</p>
//       )}
//     </div>
//   );
// }


















"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TestPage() {
  useEffect(() => {
    async function test() {
      const { data, error } = await supabase
        .from("students")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    test();
  }, []);

  return <h1>Supabase Test Running... check console</h1>;
}