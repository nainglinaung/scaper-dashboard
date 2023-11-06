
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import TableRow from './TableRow';
import { TableData } from "../types/searchresult";

const TABLE_HEAD = ["id", "adswords_count", "keyword", "total_search_result_for_keyword"];


interface TableLayoutProps {
  table: TableData[]
}

export default function TableLayout({ table }: TableLayoutProps) {

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">

      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.map((data, index) => {
              const isLast = index === table.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return <TableRow table={{ ...data, classes }} />
            },
            )}
          </tbody>
        </table>
      </CardBody>

    </Card>
  );
}