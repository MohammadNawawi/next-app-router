"use client";

import React, { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=MN1809",
      {
        method: "POST",
      }
    );

    console.log("====================================");
    console.log(res);
    console.log("====================================");

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Succefully");
      }
    }
  };
  return (
    <div>
      <h1>{status}</h1>
      <button onClick={() => revalidate()}>Revalidate</button>
    </div>
  );
}
