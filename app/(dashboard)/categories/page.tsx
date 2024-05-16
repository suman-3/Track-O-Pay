"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlus, Loader2 } from "lucide-react";
import React from "react";
import { DataTable } from "@/components/layout/data-table";
import { columns } from "./column";
import { Skeleton } from "@/components/ui/skeleton";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { useGetCategories } from "@/features/categories/api/use-get-categories";
import { useBulkDeleteCategories } from "@/features/categories/api/use-bulk-delete-categories";

const CategoriesPage = () => {
  const newCategory = useNewCategory();
  const categoriesQuery = useGetCategories();
  const categories = categoriesQuery.data || [];
  const deleteCategories = useBulkDeleteCategories();

  const isDisabled = categoriesQuery.isLoading || deleteCategories.isPending;

  const isLoading = deleteCategories.isPending;

  if (categoriesQuery.isLoading) {
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
            Categories page
          </CardTitle>
          <Button size="sm" onClick={newCategory.onOpen}>
            <CirclePlus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="name"
            columns={columns}
            data={categories}
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteCategories.mutate({ ids });
            }}
            disabled={isDisabled}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesPage;
