"use client";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { cn, formatDateRange } from "@/lib/utils";
import { FaPiggyBank } from "react-icons/fa";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { DataCard, DataCardLoading } from "./data-card";

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();
  const params = useSearchParams();
  const to = params.get("to") || undefined;
  const from = params.get("from") || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-5">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-5">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={FaPiggyBank}
        variant={
          data && data?.remainingAmount > 15000
            ? "success"
            : data && data?.remainingAmount >= 5000
            ? "warning"
            : data && data?.remainingAmount >= 1000
            ? "default"
            : "danger"
        }
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        variant={
          data && data?.incomeAmount > 15000
          ? "success"
          : data && data?.incomeAmount >= 5000
          ? "warning"
          : data && data?.incomeAmount >= 1000
          ? "default"
          : "danger"
        }
        dateRange={dateRangeLabel}
      />
      <DataCard
        title="Expenses"
        value={data?.expensesAmount}
        percentageChange={data?.expensesChange}
        icon={FaArrowTrendDown}
        variant={
          data && data?.expensesAmount > 15000
          ? "success"
          : data && data?.expensesAmount >= 5000
          ? "warning"
          : data && data?.expensesAmount >= 1000
          ? "default"
          : "danger"
        }
        dateRange={dateRangeLabel}
      />
    </div>
  );
};
