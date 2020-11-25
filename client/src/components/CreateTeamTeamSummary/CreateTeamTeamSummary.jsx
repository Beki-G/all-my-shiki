/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateTeamTeamSummary = ({ teammates, allCharacters, isReady }) => {
  const [teamProfiles, setTeamProfiles] = useState([]);
  useEffect(() => {
    getTeamProfiles();
  }, [isReady]);

  const getTeamProfiles = () => {
    // allCharacters.find(character=> character._id === teammates)
    let profiles = teammates.map((teammate) => {
      return allCharacters.find((character) => character._id === teammate.id);
    });
    setTeamProfiles(profiles);
  };

  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden">
      {teamProfiles.map((teammate, index) => {
        return (
          <div
            key={index}
            className="my-1 px-1 w-full overflow-hidden sm:w-1/2 lg:w-1/5"
          >
            <div className="max-w-sm rounded bg-white">
              <div className="px-6 py-4">
                <div className="font-bold text-xl tracking-wide">
                  {teammate.name}
                </div>
                <div className="text-gray-500 text-sm mb-3">
                  {teammate.character.name}
                </div>
                <div className="text-gray-700 text-base">
                  <div className=" font-medium underline">Soul Sets</div>
                  <div>4 set: {teammate.soulsetMain?.name || "N/A"}</div>
                  <div>2 set: {teammate.soulsetSub?.name || "N/A"}</div>
                </div>
              </div>
              <div className="mx-4 mt-2 mb-4">
                <Link
                  className="tracking-wider font-bold text-purple-700 hover:bg-purple-100 rounded p-2 inline-block"
                  to={"/shiki/" + teammate._id}
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreateTeamTeamSummary;
