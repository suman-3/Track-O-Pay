import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ImportTable } from "./import-table";

const dateFormat = "yyyy-MM-dd HH:mm:ss";
const outputFormat = "yyyy-MM-dd";

const requiredOption = ["amount", "date", "payee"];

interface SelectedColumnsState {
  [key: string]: string | null;
}

type Props = {
  data: string[][];
  onCancel: () => void;
  onSubmit: (data: any) => void;
};

export const ImportCard = ({ data, onSubmit, onCancel }: Props) => {
  const [selectedColumns, setSelectedColumns] = useState<SelectedColumnsState>(
    {}
  );

  const headers = data[0];
  const body = data.slice(1);

  const onTableHeadSelectChange = (
    columnIndex: number,
    value: string | null
  ) => {
    setSelectedColumns((prev) => {
      const newSelectedColumns = { ...prev };

      for (const key in newSelectedColumns) {
        if (newSelectedColumns[key] === value) {
          newSelectedColumns[key] = null;
        }
      }

      if (value === "skip") {
        value = null;
      }

      newSelectedColumns[`column_${columnIndex}`] = value;
      return newSelectedColumns;
    });
  };

  const progress = Object.values(selectedColumns).filter(Boolean).length;

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-14 md:-mt-20 lg:-mt-[7rem]">
      <Card className="drop-shadow-sm border-none">
        <CardHeader className="gap-y-2 flex flex-col lg:flex-row items-center justify-between px-5 py-3">
          <CardTitle className="text-xl line-clamp-1">
            Imported Transaction
          </CardTitle>
          <div className="flex items-center gap-3 flex-col lg:flex-row gap-y-2 w-full lg:w-auto"  >
            <Button size="sm" onClick={onCancel} className="w-full lg:w-auto">
              Cancel Import
            </Button>
            <Button
              className="w-full lg:w-auto mb-2 lg:mb-0"
              size="sm"
              onClick={() => {}}
              disabled={progress < requiredOption.length}
            >
              Continue ({progress} / {requiredOption.length})
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ImportTable
            headers={headers}
            body={body}
            selectedColumns={selectedColumns}
            onTableHeadSelectChange={onTableHeadSelectChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};
