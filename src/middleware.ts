import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  //   if (request.nextUrl.pathname.startsWith("/about")) {
  //     // return NextResponse.redirect(new URL("/product", request.url)); //"*Redirect* digunakan untuk memaksa berpindah halaman ke /"
  //     return NextResponse.rewrite(new URL("/", request.url)); //"Redirect* digunakan untuk mengganti tampilan sesuai dengan halaman ke /product"
  //   }
  // const isLogin = true;
  // if (!isLogin) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  const res = NextResponse.next();
  return res;
}

// export const config = {
//   matcher: ["/dashboard/:path*", "/about/:path*"],
// };

export default withAuth(mainMiddleware, ["/dashboard", "/profile"]);
