import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 bg-[#3588D6]">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 px-4">
          <h1 className="font-bold text-3xl text-[#FFFFFF]">
            Welcome Back!
          </h1>
          <p className="text-base text -[#7E8CA0]">
            Log in or Create an account to manage your finances with us now!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in"/>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground"/>
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}