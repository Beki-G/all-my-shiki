import React from "react";
import { useSortBy, useTable } from "react-table";

const ShikigamiTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns: [""] },
    },
    useSortBy
    //   useFilters
  );

  const generateSortingIndicator = (column) => {
    //   console.log(column)
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };

  //   console.log(getTableProps())
  return (
    <table
      {...getTableProps()}
      className="table-auto w-5/6 dataTable mx-auto text-center text-sm "
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className=" border-red-600"
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {generateSortingIndicator(column)}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ShikigamiTable;
