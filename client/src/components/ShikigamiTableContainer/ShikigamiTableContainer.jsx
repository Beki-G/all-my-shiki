/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import modCharacterAPI from "../../utils/modCharacterAPI";
import ShikigamiTable from "../ShikigamiTable/ShikigamiTable";

const ShikigamiTableContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPublicCharacters();

    return ()=>{setData([])}
  }, []);

  const getAllPublicCharacters = async () => {
    // console.log("pinged");
    const characters = await modCharacterAPI.getAllPublicModCharacter();
    setData(characters);
    // console.log(characters);
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
              const { value } = cell;
              return <div className="">{value}</div>;
            },
          },
          {
            Header: "Base",
            accessor: "character.name",
          },
        ],
      },
      {
        Header: "User",
        columns: [
          {
            Header: "UserName",
            accessor: "creatorId.userName",
          },
          {
            Header: "Notes",
            accessor: "userNotes",
          },
        ],
      },
      {
        Header: "Soul Sets",
        columns: [
          {
            Header: "Main",
            accessor: "soulsetMain.name",
          },
          {
            Header: "Sub",
            accessor: "soulsetSub.name",
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
              let newFormat =
                unformatted.getMonth() +
                1 +
                "/" +
                unformatted.getDate() +
                "/" +
                unformatted.getFullYear();

              if (newFormat === "NaN/NaN/NaN") newFormat = "N/A";
              return <div className="">{newFormat}</div>;
            },
          },
          {
            Header: "Date created",
            accessor: "dateCreated",
            Cell: ({ cell }) => {
              //   console.log("Cell is: ", cell);
              const { value } = cell;
              const unformatted = new Date(value);
              const newFormat =
                unformatted.getMonth() +
                1 +
                "/" +
                unformatted.getDate() +
                "/" +
                unformatted.getFullYear();
              return <div className="">{newFormat}</div>;
            },
          },
        ],
      },
    ],
    []
  );

  // console.log(data)
  return (
    <div className="overflow-x-scroll lg:overflow-auto mx-4">
      <br />
      <ShikigamiTable columns={columns} data={data} />
      <br />
    </div>
  );
};

export default ShikigamiTableContainer;
