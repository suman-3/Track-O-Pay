"use client";
import { useMountedState } from "react-use";

import { NewAccoutntSheet } from "@/features/accounts/components/new-account-sheet";
import { EditAccoutntSheet } from "@/features/accounts/components/edit-account-sheet";


export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <NewAccoutntSheet />
      <EditAccoutntSheet/>
    </>
  );
};
