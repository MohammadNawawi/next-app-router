import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-9xl">404</h1>
      <h2>Page Not Found!</h2>
      <Link href="/" className="text-blue-700 hover:cursor-pointer">
        Back to Home
      </Link>
    </div>
  );
}
