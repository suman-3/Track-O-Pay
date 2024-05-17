import { insertAccountSchema, insertTransactionsSchema } from "@/db/schema";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { AccountForm } from "./account-form";
import { z } from "zod";

import { on } from "events";
import { useCreateTransaction } from "../api/use-create-transaction";
import { useNewTransaction } from "../hooks/use-new-transaction";

const formSchema = insertTransactionsSchema.omit({
  id: true,
});
type FormValues = z.input<typeof formSchema>;

export const NewTransactionSheet = () => {
  const { isOpen, onClose } = useNewTransaction();
  const mutation = useCreateTransaction();
  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>Add a new Transaction</SheetDescription>
        </SheetHeader>
        <p> TODO: Transaction form</p>
      </SheetContent>
    </Sheet>
  );
};
