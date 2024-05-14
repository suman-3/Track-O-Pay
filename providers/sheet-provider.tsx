"use client";
import { useMountedState } from "react-use";

import { NewAccoutntSheet } from "@/features/accounts/components/new-account-sheet";
import { useEffect, useState } from "react";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <NewAccoutntSheet />
    </>
  );
};
