"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{session?.user.fullname}</h2>
    </div>
  );
}
