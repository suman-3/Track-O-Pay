import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { client } from "@/lib/hono";
import { convertAmountFromMiliunits } from "@/lib/utils";

export const useGetTransactions = () => {
  const params = useSearchParams();
  const from = params.get("from") || " ";
  const to = params.get("to") || " ";
  const accountId = params.get("accountId") || " ";

  const query = useQuery({
    //TODO : Check if params is neede in the queryKey
    queryKey: ["transactions", { from, to, accountId }],
    queryFn: async () => {
      const response = await client.api.transactions.$get({
        query: {
          from,
          to,
          accountId,
        },
      });

      if (!response.ok) {
        throw new Error(" Failed to fetch transactions");
      }

      const { data } = await response.json();

      return data.map((trasaction) => ({
        ...trasaction,
        amount: convertAmountFromMiliunits(trasaction.amount),
      }));
    },
  });

  return query;
};
