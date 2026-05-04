// export default function FeesPage() {
//   return (
//     <div>
//       <h1>💰 Fee & Payments</h1>
//       <p>Track school payments and balances.</p>
//     </div>
//   );
// }






"use client";
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../src/lib/supabaseClient";
import { useSchool } from "../src/lib/useSchool";

/* 1. DEFINE TYPE */
type Fee = {
  id: string;
  amount: number;
  school_id: string;
};

export default function Fees() {
  const { schoolId } = useSchool();

  /* 2. TYPED STATE */
  const [fees, setFees] = useState<Fee[]>([]);
  const [amount, setAmount] = useState("");

  const loadFees = async () => {
    if (!schoolId) return;

    const { data, error } = await supabase
      .from("fees")
      .select("*")
      .eq("school_id", schoolId);

    if (error) {
      console.log(error);
      return;
    }

    setFees((data as Fee[]) || []);
  };

  const addFee = async () => {
    if (!amount || !schoolId) return;

    const { error } = await supabase.from("fees").insert([
      {
        amount: Number(amount),
        school_id: schoolId,
      },
    ]);

    if (error) {
      console.log(error);
      return;
    }

    setAmount("");
    loadFees();
  };

  useEffect(() => {
    loadFees();
  }, [schoolId]);

  return (
    <div>
      <h1>Fees</h1>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <button onClick={addFee}>Add Fee</button>

      <ul>
        {fees.map((f) => (
          <li key={f.id}>{f.amount}</li>
        ))}
      </ul>
    </div>
  );
}