// import { useEffect, useState } from "react";

// export function useSchool() {
//   const [schoolId, setSchoolId] = useState(null);

//   useEffect(() => {
//     setSchoolId("demo-school-id");
//   }, []);

//   return { schoolId };
// }






import { useEffect, useState } from "react";

export function useSchool() {
  const [schoolId, setSchoolId] = useState<string | null>(null);

  useEffect(() => {
    setSchoolId("demo-school-id");
  }, []);

  return { schoolId };
}