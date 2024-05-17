"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { useBulkDeleteAccounts } from "@/features/accounts/api/use-bulk-delete-accounts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlus, Loader2 } from "lucide-react";
import React from "react";
import { DataTable } from "@/components/layout/data-table";
import { columns } from "./column";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { Skeleton } from "@/components/ui/skeleton";
import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";

const TransactionsPage = () => {
  const newTransaction = useNewTransaction();
  const accountsQuery = useGetAccounts();
  const accounts = accountsQuery.data || [];
  const deleteAccounts = useBulkDeleteAccounts();

  const isDisabled = accountsQuery.isLoading || deleteAccounts.isPending;

  const isLoading = deleteAccounts.isPending;

  if (accountsQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-14 md:-mt-20 lg:-mt-[7rem]">
        <Card className="drop-shadow-sm border-none">
          <CardHeader>
            <Skeleton className="h-8 w-48 " />
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center">
              <Loader2 className="size-10 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-14 md:-mt-20 lg:-mt-[7rem]">
      <Card className="drop-shadow-sm border-none">
        <CardHeader className="gap-y-2 flex flex-row items-center justify-between px-5 py-3">
          <CardTitle className="text-xl line-clamp-1">
            Transaction History
          </CardTitle>
          <Button size="sm" onClick={newTransaction.onOpen}>
            <CirclePlus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="name"
            columns={columns}
            data={accounts}
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteAccounts.mutate({ ids });
            }}
            disabled={isDisabled}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
