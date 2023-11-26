import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home",
  description: "Learn - Next App Router",
  authors: [{ name: "Mohammad Nawawi", url: "https://mohammadnawawi.com" }],
  // authors: [{ name: "Mohammad Nawawi", url: "http://localhost:3000" }],
  icons: {
    icon: "/icons/icon.png",
  },
  openGraph: {
    title: "Home",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
