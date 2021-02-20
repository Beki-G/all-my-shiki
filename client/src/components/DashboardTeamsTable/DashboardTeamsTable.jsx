/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import Table from "../Table/Table";
import teamAPI from "../../utils/teamAPI";
import { UseUserSession } from "../../utils/UserContext";
import modCharacterAPI from "../../utils/modCharacterAPI"
import { Link } from "react-router-dom";

const DashboardTeamsTable = () => {
  const { userProfile } = UseUserSession();
  const [data, setData] = useState([]);
  const [userHasCharacters, setUserHasCharacters] = useState(false)

  useEffect(() => {
    getUserTeamInfo();
    return () =>{
      setData([])
    }
  }, [userProfile]);

  const getUserTeamInfo = async () => {
    if (userProfile._id) {
      const teams = await teamAPI.getUserTeamBasicInfo(userProfile._id);
      const names = await modCharacterAPI.getAllUserModChara(userProfile._id);
      if (names.length>0) setUserHasCharacters(true)
      // console.log("teams", teams);
      setData(teams);
    }
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
    <div className=" mx-auto m-0 md:w-3/4 w-5/6 mb-4">
      <div className="flex items-center">
        <h1 className="mt-2 mb-2 text-2xl mr-2 font-semibold">Teams Table </h1>
        {userHasCharacters&&<AddButton type={"team"} />}
      </div>

      <div className="w-full overflow-x-auto mb-6">
        {data.length>0? <Table columns={columns} data={data} columnsHidden={[]}/> : <div>Build your shiki first and then use then build your teams using the plus button</div>}
      </div>
    </div>
  );
};

export default DashboardTeamsTable;
