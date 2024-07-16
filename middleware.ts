import { NextResponse } from "next/server";
import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProctectedRoute = createRouteMatcher([
  "/"
])

export default clerkMiddleware((auth, request) => {
  if (isProctectedRoute(request)) {
    auth().protect;
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};