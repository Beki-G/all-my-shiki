/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import TableColumnCheckboxContainer from "../TableColumnCheckboxContainer/TableColumnCheckboxContainer";
import Table from "../Table/Table";
import teamAPI from "../../utils/teamAPI";
import TeamsTableRowCard from "../TeamsTableRowCard/TeamsTableRowCard";
import { Link } from "react-router-dom";
import { SelectColumnFilter } from "../Table/Filters";
import StarIcon from "../StarIcon/StarIcon";
import TableLikeCount from "../TableLikeCount/TableLikeCount";

const TeamsTableContainer = () => {
  const [data, setData] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
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
  }, []);

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
              return <Link to={`/team/${cell.row.original._id}`}>{value}</Link>;
            },
          },
          {
            Header: "Format",
            accessor: "teamFormat",
            Cell: ({ cell }) => {
              const { value } = cell;
              const teamForm = value.trim().split(" ");
              let form = teamForm[teamForm.length - 1];

              return <div>{form === "none" ? "6 Shiki (Draft)" : value}</div>;
            },
            Filter: SelectColumnFilter,
            filter: "equals",
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
              return <div>{formattedDate}</div>;
            },
            disableFilters: true,
          },
          {
            Header: "Date Modified",
            accessor: "dateModified",
            Cell: ({ cell }) => {
              //   console.log("Cell is: ", cell);
              const { value } = cell;
              const unformatted = new Date(value);
              const formattedDate = formatDate(unformatted);
              return <div>{formattedDate}</div>;
            },
            disableFilters: true,
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
            Header: "Like",
            accessor: "likes",
            Cell: ({ cell }) => {
              return (
                <StarIcon
                  likesArr={cell.value}
                  type={"team"}
                  itemId={cell.row.original._id}
                />
              );
            },
            disableFilters: true,
            disableSortBy: true,

            // sortType: (a, b) => {
            //   console.log("a is: ", a)
            //   return (a.original.likes.includes(userProfile._id) === b.original.likes.includes(userProfile._id)
            //     ? 0
            //     : a.original.likes.includes(userProfile._id)
            //     ? 1
            //     : -1);
            //   // if (a.length === b.length) {
            //   //   return a > b ? 1 : -1;
            //   // }
            //   // return a.length > b.length ? 1 : -1;
            // },
          },
          {
            Header: "Likes",
            accessor: a => a._id,
            Cell: ({ cell }) => {
              // console.log(cell.value)
              // return <div>{cell.value}</div>;
              return <TableLikeCount teamId={cell.value} />
          },
            disableFilters: true,
            disableSortBy: true,
          },
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
    { name: "Likes", accessor: "likes" },
  ];

  return (
    <div className="overflow-x-scroll lg:overflow-auto mb-4">
      <div className="w-5/6 mx-auto bg-old-mauve text-white text-xl mb-2 rounded-md text-center p-2">
        Teams
        <p className="text-base opacity-80 my-2">
          Check out the teams made from other players. Tap on any of the
          sub-headings to sort and toggle the filters to search for more
          specific info.{" "}
        </p>
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
          columnsHidden={hideColumns}
          tableRowCard={TeamsTableRowCard}
          isShowFilter={isShowFilter}
        />
      </div>
    </div>
  );
};

export default TeamsTableContainer;
