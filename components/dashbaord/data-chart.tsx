"use client";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { Chart, ChartLoader } from "./chart";
import { SpendingPie, SpendingPieLoader } from "./spending-pie";

export const DataCharts = () => {
  const { data, isLoading } = useGetSummary();

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-6 gap-6">
        <div className="col-span-1 lg:col-span-3 xl:col-span-4">
          <ChartLoader />
        </div>
        <div className="col-span-1 lg:col-span-3 xl:col-span-2">
          <SpendingPieLoader />
        </div>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-6 gap-6">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4">
        <Chart data={data?.days} />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-2">
        <SpendingPie data={data?.categories} />
      </div>
    </div>
  );
};
