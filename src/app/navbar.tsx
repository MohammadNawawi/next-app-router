import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between items-center h-100">
      <h1 className="">Navbar</h1>
      <div className="flex">
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${
                pathname === "/" ? "text-blue-600" : ""
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathname === "/about" ? "text-blue-600" : ""
              } cursor-pointer`}
            >
              about
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${
                pathname === "/about/profile" ? "text-blue-600" : ""
              } cursor-pointer`}
            >
              profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex justify-center items-center">
            <Image
              src="/images/profile.jpg"
              width={100}
              height={100}
              alt="profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <h4 className="mr-5">{session?.user.fullname}</h4>
            <button
              className="bg-white text-black rounded-md px-3 text-sm h-7 cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white text-black rounded-md px-3 text-sm h-7 cursor-pointer"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
