import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   if (request.nextUrl.pathname.startsWith("/about")) {
  //     // return NextResponse.redirect(new URL("/product", request.url)); //"*Redirect* digunakan untuk memaksa berpindah halaman ke /"
  //     return NextResponse.rewrite(new URL("/", request.url)); //"Redirect* digunakan untuk mengganti tampilan sesuai dengan halaman ke /product"
  //   }
  const isLogin = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/about/:path*"],
};
