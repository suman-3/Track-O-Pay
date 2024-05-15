import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

type Props = {
  disabled?: boolean;
  handleDelete: () => void;
  triigerLabel: string;
  dialogueTitle: string;
  dialogueDescription: string;
};

const DeleteDialogueButton = ({
  disabled,
  handleDelete,
  triigerLabel,
  dialogueTitle,
  dialogueDescription,
}: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full">
        <Button
          className="w-full"
          variant="outline"
          type="button"
          disabled={disabled}
        >
          <Trash className="size-4 mr-2" /> {triigerLabel || "Delete"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogueTitle}</AlertDialogTitle>
          <AlertDialogDescription>{dialogueDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Button type="button" disabled={disabled} onClick={handleDelete}>
              Continue
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialogueButton;
