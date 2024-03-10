import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(req: NextRequest) {
  console.log("middleware path: ", req.nextUrl.pathname);
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("mw user", user);

  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/chat/:path*", "/"],
};
