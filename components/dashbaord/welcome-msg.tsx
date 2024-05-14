"use client";

import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-3">
      <h2 className="text-2xl lg:text-4xl text-white font-medium flex items-center gap-3">
        Welcome Back{isLoaded ? ", " : " "}
        {user?.firstName}{" "}
        {isLoaded ? "👋" : <Loader2 className="w-8 h-8 animate-spin" />}
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is Your Financial Overview Report
      </p>
    </div>
  );
};

export default WelcomeMsg;
