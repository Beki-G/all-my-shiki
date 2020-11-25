import React from "react";
import {Link} from "react-router-dom"

const TeamsTableRowCard = (row) => {
  const { original } = row;
//   console.log("original: ", original);
  return (
    <div className="flex mx-auto my-2 flex-col">
        <div className="text-lg ">Title: 
        <Link className="text-lg ml-1 hover:text-purple-700 focus:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700" to={`/team/${original._id}`}>
        {original.title}
        </Link> </div>
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
        <div className="text-lg ">Notes: {original?.userNotes || "N/A"}</div>
    </div>
  );
};

export default TeamsTableRowCard;
