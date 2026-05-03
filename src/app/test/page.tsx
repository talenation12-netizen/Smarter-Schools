"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";


export default function TestPage() {
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase.from("students").select("*");
      console.log("DATA:", data);
      console.log("ERROR:", error);
    };

    test();
  }, []);

  return <div>Check console for Supabase test</div>;
}