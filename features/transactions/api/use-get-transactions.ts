import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { format, subDays } from "date-fns";

import { client } from "@/lib/hono";
import { convertAmountFromMiliunits } from "@/lib/utils";

export const useGetTransactions = () => {
  const params = useSearchParams();
  const today = format(new Date(), "yyyy-MM-dd");
  const thirtyDaysAgo = format(subDays(new Date(), 30), "yyyy-MM-dd");

  const from = params.get("from") || thirtyDaysAgo;
  const to = params.get("to") || today;
  const accountId = params.get("accountId") || "";

  const query = useQuery({
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
        throw new Error("Failed to fetch transactions");
      }

      const { data } = await response.json();

      return data.map((transaction) => ({
        ...transaction,
        amount: convertAmountFromMiliunits(transaction.amount),
      }));
    },
  });

  return query;
};