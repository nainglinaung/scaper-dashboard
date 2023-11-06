import {
  Typography,
  Chip,
  tab,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


interface ITable {
  id: string,
  adswords_count: string,
  keyword: string,
  link_count: string,
  total_search_result_for_keyword: string,
  raw_html: string;
  classes: string

}

interface TableRowProps {
  table: ITable
}


function TableRow({ table }: TableRowProps) {
  return (
    <tr key={table.id}>
      <td className={table.classes}>
        {table.id}
      </td>
      <td className={table.classes}>
        {table.adswords_count}
      </td>
      <td className={table.classes}>
        <Link to={`page/${table.id}`}>{table.keyword}</Link>
      </td>
      <td className={table.classes}>
        {table.total_search_result_for_keyword}
      </td>
    </tr>
  )
}

export default TableRow;