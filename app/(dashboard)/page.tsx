"use client";
import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import React from "react";

const page = () => {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>Add an Account</Button>
    </div>
  );
};

export default page;
