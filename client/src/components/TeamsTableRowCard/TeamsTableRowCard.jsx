import React from "react";
import { Link } from "react-router-dom";

const TeamsTableRowCard = (row) => {
  const { original } = row;

  const dateFormat = (oldDate) => {
    const tempDate = new Date(oldDate);
    let newDate =
      tempDate.getMonth() +
      1 +
      "/" +
      tempDate.getDate() +
      "/" +
      tempDate.getFullYear().toString().substr(-2);
    return newDate;
  };
  return (
    <div className="flex mx-auto my-2 flex-col">
      <div className="text-lg font-semibold ">
        <Link
          className="text-lg font-semibold ml-1 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-700"
          to={`/team/${original._id}`}
        >
          Team name: {original.title}{" "}
          <span className="font-normal text-base">
            by {original.creatorId.userName}
          </span>
        </Link>{" "}
      </div>
      <table className="table-auto childTable w-3/4 mx-auto my-2">
        <thead>
          <tr>
            <th>Shiki Base</th>
            <th>4 Set</th>
            <th>2 Set</th>
          </tr>
        </thead>
        <tbody>
          {original.teammates.map((teammate, index) => {
            return (
              <tr key={index}>
                <td>{teammate.character.name}</td>
                <td>{teammate.soulsetMain?.name || "N/A"}</td>
                <td>{teammate.soulsetSub?.name || "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="my-2 flex flex-wrap justify-center md:flex-nowrap mx-auto p-4 w-3/4">
        <div className="text-left w-1/2 mr-2">
          <div><span className="font-semibold">Date Created:</span> {dateFormat(original.dateCreated)}</div>
          {original.dateModified ? <div><span className="font-semibold">Date modified:</span> {dateFormat(original.dateModified)}</div> : ""}
          <div><span className="font-semibold">User Notes:</span> {original?.userNotes || "N/A"}</div>
        </div>
        <div className="text-left w-1/2 ">
          <div><span className="font-semibold">Likes:</span> {original.likes.length}</div>
          <div><span className="font-semibold">User Guild:</span> {original.creatorId.guild}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamsTableRowCard;
