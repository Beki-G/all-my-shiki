/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Loading from "../components/Auth/Loading";
import { UseUserSession } from "../utils/UserContext";
import teamAPI from "../utils/teamAPI";
import TeamProfileContainer from "../components/TeamProfileContainer/TeamProfileContainer";

const TeamProfile = () => {
  const { id } = useParams();
  const { userProfile } = UseUserSession();

  const [isInDatabase, setIsInDatabase] = useState("checking");
  const [team, setTeam] = useState();
  // eslint-disable-next-line no-unused-vars
  const [isPrivate, setIsPrivate] = useState(true);

  useEffect(() => {
    checkDatabase();
  }, [userProfile]);

  async function checkDatabase() {
    const teamProfile = await teamAPI.getTeamByID(id);

    if (teamProfile.error) setIsInDatabase(false);

    if (teamProfile.title) {
      setTeam(teamProfile);
      setIsPrivate(teamProfile.isPrivate);
      setIsInDatabase(true);
    }
  }

  return (
    <div className="justify-end rounded bg-gray-50 font-sans ">
      <div className="bg-black">
        <Navbar />
      </div>
      <br />
      <div className="w-3/4 m-auto">
        {isInDatabase === "checking" ? (
          <Loading />
        ) : isInDatabase ? (
          <TeamProfileContainer team={team} isPrivate={team.isPrivate} />
        ) : (
          "Invalid Link, please try a different link."
        )}
      </div>
    </div>
  );
};

export default TeamProfile;
