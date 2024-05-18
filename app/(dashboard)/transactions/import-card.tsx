
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

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-14 md:-mt-20 lg:-mt-[7rem]">
      <Card className="drop-shadow-sm border-none">
        <CardHeader className="gap-y-2 flex flex-row items-center justify-between px-5 py-3">
          <CardTitle className="text-xl line-clamp-1">
            Imported Transaction
          </CardTitle>
          <div className="flex items-center gap-3">
            <Button size="sm" onClick={onCancel}>
              Cancel Import
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ImportTable
            headers={headers}
            body={body}
            selectedColumns={selectedColumns}
            onTableHeadSelectChange={() => {}}
          />
        </CardContent>
      </Card>
    </div>
  );
};
