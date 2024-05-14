"use client";
import { Button } from "@/components/ui/button";
import { userNewAccount } from "@/features/accounts/hooks/use-new-account";
import React from "react";

const page = () => {
  const { onOpen } = userNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>Add an Account</Button>
    </div>
  );
};

export default page;
