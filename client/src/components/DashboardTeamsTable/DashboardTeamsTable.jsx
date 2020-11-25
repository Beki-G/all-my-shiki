/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import Table from "../Table/Table";
import teamAPI from "../../utils/teamAPI";
import { UseUserSession } from "../../utils/UserContext";
import { Link } from "react-router-dom";

const DashboardTeamsTable = () => {
  const { userProfile } = UseUserSession();
  const [data, setData] = useState([]);
  const [hideColumns, setHideColumns] = useState([]);

  useEffect(() => {
    getUserTeamInfo();
  }, []);

  const getUserTeamInfo = async () => {
    const teams = await teamAPI.getUserTeamBasicInfo(userProfile._id);
    console.log("teams", teams);
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
        Header: "Team Name",
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
      {
        Header: "Notes",
        accessor: "userNotes",
      },
    ],
    []
  );
  return (
    <div className=" mx-auto m-0 w-3/4">
      <div className="flex items-center">
        <h1 className="mt-2 mb-2 text-2xl mr-2 font-semibold">Teams Table </h1>
        <AddButton type={"team"} />
      </div>

      <div className="w-full">
        <Table columns={columns} data={data} columnsHidden={hideColumns} />
      </div>

      <div className="overflow-x-scroll">To be teams table</div>
    </div>
  );
};

export default DashboardTeamsTable;
