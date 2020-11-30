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

  useEffect(() => {
    checkDatabase();
  }, [userProfile]);

  async function checkDatabase() {
    const teamProfile = await teamAPI.getTeamByID(id);

    if (teamProfile.title) {
      setTeam(teamProfile);
      setIsInDatabase(true);
    } else {
      setIsInDatabase(false);
    }
  }

  return (
    <div className="justify-end rounded ">
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
