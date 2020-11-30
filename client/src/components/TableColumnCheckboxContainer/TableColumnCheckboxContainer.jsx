import React from "react";
import TableColumnCheckbox from "../TableColumnCheckbox/TableColumnCheckbox";
import ToggleShowFilters from "../ToggleShowFilters/ToggleShowFilters"

const TableColumnCheckboxContainer = ({
  columns,
  setHideColumns,
  hideColumns,
  isShowFilter,
  setIsShowFilter
}) => {
  // console.log("columns: ", columns);

  return (
    <div className=" w-5/6 mx-auto bg-middle-red p-4 rounded-md">
      <div className="text-lg font-semibold">Check to hide columns</div>
      <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1">
      {columns.map((col, index) => {
        return <TableColumnCheckbox key={index} column={col} hideColumns={hideColumns} setHideColumns={setHideColumns}/>;
      })}
      </div>

      <div className="flex flex-row ">
        <p className="mr-4 mt-2 text-lg font-semibold"> Filters: </p>
      <ToggleShowFilters isShowFilter={isShowFilter} setIsShowFilter={setIsShowFilter} />
      
      </div>
      
    </div>
  );
};

export default TableColumnCheckboxContainer;
