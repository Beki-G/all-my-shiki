import React from "react";
import TableColumnCheckbox from "../TableColumnCheckbox/TableColumnCheckbox";

const TableColumnCheckboxContainer = ({
  columns,
  setHideColumns,
  hideColumns,
}) => {
  // console.log("columns: ", columns);

  return (
    <div className=" w-5/6 mx-auto bg-gray-200 p-4 rounded-md">
      <div className="text-lg">Check to hide columns</div>
      <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1">
      {columns.map((col, index) => {
        return <TableColumnCheckbox key={index} column={col} hideColumns={hideColumns} setHideColumns={setHideColumns}/>;
      })}
      </div>
      
    </div>
  );
};

export default TableColumnCheckboxContainer;
