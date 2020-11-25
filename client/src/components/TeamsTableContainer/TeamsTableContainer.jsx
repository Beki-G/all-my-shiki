/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import TableColumnCheckboxContainer from "../TableColumnCheckboxContainer/TableColumnCheckboxContainer";
import Table from "../Table/Table";
import teamAPI from "../../utils/teamAPI";
import TeamsTableRowCard from "../TeamsTableRowCard/TeamsTableRowCard";
import { Link } from "react-router-dom";

const TeamsTableContainer = () => {
  const [data, setData] = useState([]);
  const [hideColumns, setHideColumns] = useState([
    "teamFormat",
    "userNotes",
    "creatorId.guild",
    "dateModified",
    "onmyoji",
  ]);

  useEffect(() => {
    getAllPublicTeams();
    return () => {
      setData([]);
    };
  }, [hideColumns]);

  const getAllPublicTeams = async () => {
    const teams = await teamAPI.getAllPublicTeams();
    setData(teams);
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
        Header: "Team",
        columns: [
          {
            Header: "Team name",
            accessor: "title",
            Cell: ({ cell }) => {
                // console.log(cell.row.original._id)
                const { value } = cell;
                return <Link to={`/team/${cell.row.original._id}`}>{value}</Link>
              },
          },
          {
            Header: "Format",
            accessor: "teamFormat",
            Cell: ({cell})=>{
                const{value} = cell
                const teamForm = value.trim().split(" ");
                let form = teamForm[teamForm.length -1]

            return <div>{form==="none"? "6 Shiki (Draft)": value}</div>
            }
          },
          {
            Header: "Onmyoji",
            accessor: "onmyoji",
            Cell: ({ cell }) => {
              const { value } = cell;
              let onmyoji = "";
              if (value) {
                const teamForm = cell.row.original.teamFormat.trim().split(" ");
                onmyoji = teamForm[teamForm.length - 1];
              }
              return <div>{onmyoji === "none" ? "None" : value}</div>;
            },
          },
          {
            Header: "Team",
            accessor: "teammates",
            Cell: ({ cell }) => {
              const { value } = cell;
              // console.log("value", value)
              let teammateNames;
              if (value) {
                teammateNames = value.map((teammate) => {
                  return teammate.character.name;
                });
              }

              return <div>{value ? teammateNames.join(", ") : ""}</div>;
            },
          },
          {
            Header: "Date Created",
            accessor: "dateCreated",
            Cell: ({ cell }) => {
              //   console.log("Cell is: ", cell);
              const { value } = cell;
              const unformatted = new Date(value);
              const formattedDate = formatDate(unformatted);
              return <div className="">{formattedDate}</div>;
            },
          },
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
        ],
      },
      {
        Header: "User",
        columns: [
          {
            Header: "User Name",
            accessor: "creatorId.userName",
          },
          {
            Header: "Guild",
            accessor: "creatorId.guild",
          },
          {
            Header: "Notes",
            accessor: "userNotes",
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
    { name: "Team name", accessor: "title" },
    { name: "Format", accessor: "teamFormat" },
    { name: "Onmyoji", accessor: "onmyoji" },
    { name: "Teammates", accessor: "teammates" },
    { name: "Username", accessor: "creatorId.userName" },
    { name: "Date Created", accessor: "dateCreated" },
    { name: "Notes", accessor: "userNotes" },
    { name: "Guild", accessor: "creatorId.guild" },
    { name: "Date Modified", accessor: "dateModified" },
  ];

  return (
    <div className="overflow-x-scroll lg:overflow-auto mb-4">
      <TableColumnCheckboxContainer
        columns={columnAccessors}
        setHideColumns={setHideColumns}
        hideColumns={hideColumns}
      />
      <br />
      <Table
        columns={columns}
        data={data}
        columnsHidden={hideColumns}
        tableRowCard={TeamsTableRowCard}
      />
    </div>
  );
};

export default TeamsTableContainer;
