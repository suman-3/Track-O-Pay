import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <Link
        href="/"
        className="h-full bg-blue-600 hidden lg:flex items-center justify-center"
      >
        <Image
          src="/logo_white.svg"
          alt="white_logo"
          height={100}
          width={100}
        />
        <h1 className="montserrat-font text-white text-4xl ml-2">
          Track O Pay
        </h1>
      </Link>
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-2 pt-14 lg:pt-5">
          <ClerkLoaded>
            <h1 className="font-bold text-3xl text-muted-foreground text-[#2E2A47]">
              Welcome To Track O Pay
            </h1>
          </ClerkLoaded>
          <ClerkLoading>
            <h1 className="font-bold text-3xl text-muted-foreground text-[#2E2A47] flex items-center justify-center">
              Welcome To Track O Pay<Loader className="w-8 h-8 animate-spin ml-2" />
            </h1>
          </ClerkLoading>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard
          </p>
        </div>
        <div className="flex items-center justify-center mt-3">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Skeleton className="w-[390px] h-[480px] rounded-lg bg-gray-300/50 shadow-lg" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
