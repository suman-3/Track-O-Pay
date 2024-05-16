import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";


import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Save, Trash, WandSparkles } from "lucide-react";
import { insertCategoriesSchema } from "@/db/schema";


const formSchema = insertCategoriesSchema.pick({
  name: true,
});
type FormValues = z.input<typeof formSchema>;
type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};

export const CategoryForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="pt-4 space-y-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="e.g. Food, Travel , etc."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={disabled}>
          {id ? <Save className="size-4 mr-2" /> : <WandSparkles className="size-4 mr-2" />}
          {id ? "Save Changes" : "Create Category"}
        </Button>

        {!!id && (
           <Button type="button"  className="w-full" variant="outline" disabled={disabled} onClick={handleDelete}>
            <Trash className="size-4 mr-2"  />
          Delete Category
         </Button>
        )}
      </form>
    </Form>
  );
};
