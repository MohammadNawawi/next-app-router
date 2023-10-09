import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <h1 className="">Navbar</h1>
      <ul className="flex ml-5">
        <Link href="/" className="hover:text-red-400">
          <li className="mr-3 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-3 cursor-pointer">about</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-3 cursor-pointer">profile</li>
        </Link>
      </ul>
    </nav>
  );
}
