"use client";

import { userNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import React from "react";

import { Payment, columns } from "./column";

import { DataTable } from "@/components/layout/data-table";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52f",
    amount: 50,
    status: "pending",
    email: "a@example.com",
  },
  // ...
];

const AccountsPage = () => {
  const newAccount = userNewAccount();
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-14 md:-mt-20 lg:-mt-[7rem]">
      <Card className="drop-shadow-sm">
        <CardHeader className="gap-y-2 flex flex-row items-center justify-between px-5 py-3">
          <CardTitle className="text-xl line-clamp-1">Account page</CardTitle>
          <Button size="sm" onClick={newAccount.onOpen}>
            <CirclePlus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="email"
            columns={columns}
            data={data}
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
