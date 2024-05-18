import React from "react";
import HeaderLogo from "./headerLogo";
import Navigation from "./navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";
import WelcomeMsg from "../dashbaord/welcome-msg";
import Image from "next/image";
import { Filters } from "../dashbaord/filters";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-4 lg:py-9 lg:px-14 pb-20 md:pb-30 lg:pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-10 md:mb-12 lg:mb-14">
          <div className="flex items-center lg:gap-x-20">
            <HeaderLogo />
            <Navigation />
          </div>
          <Image
            src="/logo_white.svg"
            alt="logo"
            width={30}
            height={30}
            className="block lg:hidden"
          />
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Skeleton className="h-8 w-8 rounded-full bg-gray-400/40 " />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
        <Filters/>
      </div>
    </header>
  );
};

export default Header;
