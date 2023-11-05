import {
    Typography,
    Chip,
} from "@material-tailwind/react";
  

export interface TableRowtype {
    readonly name: string, 
    readonly classes: string,
    readonly amount: string, 
    readonly date: string,
    readonly status: string,
    readonly account: string, 
    readonly accountNumber: string, 
    readonly expiry: string, 
}

interface TableRowProps {
    table: TableRowtype
}
  

function TableRow({ table }: TableRowProps) {
  return (
        <tr key={table.name}>
          <td className={table.classes}>
            <div className="flex items-center gap-3">
            
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {table.name}
              </Typography>
            </div>
          </td>
          <td className={table.classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {table.amount}
            </Typography>
          </td>
          <td className={table.classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {table.date}
            </Typography>
          </td>
          <td className={table.classes}>
            <div className="w-max">
              <Chip
                size="sm"
                variant="ghost"
                value={table.status}
                color={
                  table.status === "paid"
                    ? "green"
                    : table.status === "pending"
                    ? "amber"
                    : "red"
                }
              />
            </div>
          </td>
          <td className={table.classes}>
            <div className="flex items-center gap-3">
      
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal capitalize"
                >
                  {table.account.split("-").join(" ")} {table.accountNumber}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  {table.expiry}
                </Typography>
              </div>
            </div>
          </td>

        </tr>
  )
}

export default TableRow;