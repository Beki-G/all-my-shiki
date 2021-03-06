/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { UseUserSession } from "../../utils/UserContext";
import TeamProfileCard from "../TeamProfileCard/TeamProfileCard";

const TeamProfileContainer = ({team, isPrivate}) => {
    const { userProfile } = UseUserSession();
    const [userType, setUserType] = useState("guest");

    useEffect(() => {
        getUserType();
    
      }, [userProfile]);

    const getUserType = () => {
        if (userProfile.auth0Id) {
          // console.log("isUser")
          setUserType("user");
        }
        if (userProfile._id === team.creatorId._id) {
          // console.log("isCreator")
          setUserType("creator");
        }
      };
    return (
        <div>
            {userType==="creator" ||!isPrivate ? (
                <TeamProfileCard team={team} userType={userType}/>
            ) : (
                <div className="text-2xl">Sorry Team is set to private</div>
            )}
        </div>
    )
}

export default TeamProfileContainer
