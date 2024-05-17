import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type RequestType = InferRequestType<
  typeof client.api.transactions.$post
>["json"];
type ResponseType = InferResponseType<typeof client.api.transactions.$post>;

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions.$post({ json });
      if (!response.ok) {
        throw new Error("Failed to create transaction");
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Transaction created successfully");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: () => {
      toast.error("Failed to create transaction");
      // handle error
    },
  });

  return mutation;
};
