/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Filter, DefaultColumnFilter }from "./Filters"
import {
  useSortBy,
  useTable,
  useExpanded,
  usePagination,
  useFilters,
} from "react-table";

const Table = ({ columns, data, tableRowCard, columnsHidden, isShowFilter }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setHiddenColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: {Filter: DefaultColumnFilter},
      initialState: { hiddenColumns: columnsHidden },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
    //   useFilters
  );

  useEffect(() => {
    setHiddenColumns(columnsHidden);
  }, [columnsHidden]);

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <>
      <table
        {...getTableProps()}
        className="table-auto w-full dataTable mx-auto text-center text-sm rounded-md"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className=""
            >
              {headerGroup.headers.map((column) => (
                <th className="justify-center" {...column.getHeaderProps()}>
                  <div {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                  </div>
                  <Filter column={column} isShowFilter={isShowFilter}/>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.getRowProps().key}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
                {row.isExpanded && (
                  <tr>
                    <td
                      className="text-center items-center justify-center content-center "
                      colSpan={visibleColumns.length}
                    >
                      {tableRowCard(row)}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className="w-5/6 mx-auto text-center">
        <button onClick={() => gotoPage(0)}>{"<<"}</button>
        {"  "}
        <button onClick={previousPage} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <>
          Page:{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </>
        <select value={pageSize} onChange={onChangeInSelect}>
          {[10, 20, 30].map((pageSize) => {
            return (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            );
          })}
        </select>{" "}
        <button onClick={nextPage} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};

export default Table;
