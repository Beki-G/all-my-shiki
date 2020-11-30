/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import modCharacterAPI from "../../utils/modCharacterAPI";
import Table from "../Table/Table";
import ShikigamiTableRowCard from "../ShikigamiTableRowCard/ShikigamiTableRowCard";
import TableColumnCheckboxContainer from "../TableColumnCheckboxContainer/TableColumnCheckboxContainer";

import { SelectColumnFilter } from "../Table/Filters";

const ShikigamiTableContainer = () => {
  const [data, setData] = useState([]);
  const [hideColumns, setHideColumns] = useState([
    "dateCreated",
    "userNotes",
    "creatorId.guild",
    "name",
  ]);
  const [isShowFilter, setIsShowFilter] = useState(false);

  useEffect(() => {
    getAllPublicCharacters();

    return () => {
      setData([]);
    };
  }, [hideColumns]);

  const getAllPublicCharacters = async () => {
    // console.log("pinged");
    const characters = await modCharacterAPI.getAllPublicModCharacter();
    setData(characters);
    // console.log(characters);
  };

  const formatDate = (date) => {
    let newFormat =
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear().toString().substr(-2);

    if (newFormat === "NaN/NaN/aN") newFormat = "N/A";
    return newFormat;
  };

  const columns = useMemo(
    () => [
      {
        Header: "Shikigami",
        columns: [
          {
            Header: "Name",
            accessor: "name",
            Cell: ({ cell }) => {
              // console.log(cell.row.original._id)
              const { value } = cell;
              return (
                <Link to={`/shiki/${cell.row.original._id}`}>{value}</Link>
              );
            },
          },
          {
            Header: "Base",
            accessor: "character.name",
            Cell: ({ cell }) => {
              // console.log(cell.row.original._id)
              const { value } = cell;
              return (
                <Link to={`/shiki/${cell.row.original._id}`}>{value}</Link>
              );
            },
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
      {
        Header: "User",
        columns: [
          {
            Header: "Username",
            accessor: "creatorId.userName",
          },
          {
            Header: "Notes",
            accessor: "userNotes",
          },
          {
            Header: "Guild",
            accessor: "creatorId.guild",
          },
        ],
      },
      {
        Header: "Soul Sets",
        columns: [
          {
            Header: "Main",
            accessor: "soulsetMain.name",
            Filter: SelectColumnFilter,
            filter: "equals",
          },
          {
            Header: "Sub",
            accessor: "soulsetSub.name",
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
      {
        Header: "Dates",
        columns: [
          {
            Header: "Date Modified",
            accessor: "dateModified",
            Cell: ({ cell }) => {
              //   console.log("Cell is: ", cell);
              const { value } = cell;
              const unformatted = new Date(value);
              const formattedDate = formatDate(unformatted);
              return <div className="">{formattedDate}</div>;
            },
          },
          {
            Header: "Date created",
            accessor: "dateCreated",
            Cell: ({ cell }) => {
              //   console.log("Cell is: ", cell);
              const { value } = cell;
              const unformatted = new Date(value);
              const formattedDate = formatDate(unformatted);
              return <div className="">{formattedDate}</div>;
            },
          },
        ],
      },
      {
        Header: "Expand",
        columns: [
          {
            expander: true,
            Header: () => <strong>More</strong>,
            width: 65,
            id: "expander",
            Cell: ({ isExpanded, row, ...rest }) => (
              <span {...row.getToggleRowExpandedProps()}>
                {row.isExpanded ? <span>&#x2299;</span> : <span>&#x2295;</span>}
              </span>
            ),
            style: {
              cursor: "pointer",
              fontSize: 25,
              padding: "0",
              textAlign: "center",
              userSelect: "none",
            },
          },
        ],
      },
    ],
    []
  );

  const columnAccessors = [
    { name: "Date Created", accessor: "dateCreated" },
    { name: "Notes", accessor: "userNotes" },
    { name: "User Guild", accessor: "creatorId.guild" },
    { name: "Shiki Name", accessor: "name" },
    { name: "Username", accessor: "creatorId.userName" },
    { name: "Shiki Base", accessor: "character.name" },
    { name: "SoulSet Main", accessor: "soulsetMain.name" },
    { name: "SoulSet Sub", accessor: "soulsetSub.name" },
    { name: "Date Modified", accessor: "dateModified" },
  ];

  return (
    
    <div className="overflow-x-scroll lg:overflow-auto">

      <div className="w-5/6 mx-auto bg-old-mauve text-white text-xl mb-2 rounded-md text-center p-2">
        Shikigami Builds
        <p className="text-base opacity-80 my-2">Check out the shikigami builds by other players. Tap on any of the sub-headings to sort and toggle the filters to search for more specific info. </p>
      </div>
      <TableColumnCheckboxContainer
        columns={columnAccessors}
        setHideColumns={setHideColumns}
        hideColumns={hideColumns}
        isShowFilter={isShowFilter}
        setIsShowFilter={setIsShowFilter}
      />

      <br />
      <div className="w-5/6 mx-auto">
        <Table
          columns={columns}
          data={data}
          tableRowCard={ShikigamiTableRowCard}
          columnsHidden={hideColumns}
          isShowFilter={isShowFilter}
        />
      </div>

      <br />
    </div>
  );
};

export default ShikigamiTableContainer;
