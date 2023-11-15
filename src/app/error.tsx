"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-9xl">500</h1>
      <h2>Something Went Wrong!</h2>
      <Link href="/" className="text-blue-700 hover:cursor-pointer">
        Back to Home
      </Link>
    </div>
  );
}
