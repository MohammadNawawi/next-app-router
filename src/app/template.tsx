"use client";
import { useState } from "react";
export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setstate] = useState(0);
  return (
    <div>
      {/* <h1>Template {state}</h1>
      <button onClick={() => setstate(state + 1)}>Template Klik</button> */}
      {children}
    </div>
  );
}
