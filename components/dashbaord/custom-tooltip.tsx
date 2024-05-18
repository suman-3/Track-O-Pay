
import { formatCurrency } from "@/lib/utils";
import { Separator } from "../ui/separator";

export const CustomTooltip = ({ active, payload}: any) => {
    if(!active) return null;

    const date = payload[0].payload.date;
    const income = payload[0].value;
    const expenses = payload[1].value;

    return (
        <div className="rounded-sm bg-white shadow-sm border overflow-hidden">
<div>
    
</div>
        </div>
    )
}

