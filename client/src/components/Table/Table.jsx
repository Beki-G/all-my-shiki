/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSortBy, useTable, useExpanded, usePagination } from "react-table";

const Table = ({ columns, data, ShikigamiTableRowCard, columnsHidden }) => {
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
      initialState: { hiddenColumns: columnsHidden },
    },
    useSortBy,
    useExpanded,
    usePagination
    //   useFilters
  );

  useEffect(()=>{
    setHiddenColumns(columnsHidden)
  }, [columnsHidden])

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
        className="table-auto w-5/6 dataTable mx-auto text-center text-sm rounded-md"
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
                    <td colSpan={visibleColumns.length}>
                      {ShikigamiTableRowCard(row)}
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
