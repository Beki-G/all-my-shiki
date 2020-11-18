/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { CharacterProfileCard } from "../CharacterProfileCard/CharacterProfileCard";
import { UseUserSession } from "../../utils/UserContext";

const CharacterProfileContainer = ({ character, isPrivate }) => {
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
    if (userProfile._id === character.creatorId._id) {
      // console.log("isCreator")
      setUserType("creator");
    }
  };

  return (
    <div>
      {userType === "creator" || !isPrivate ? (
        <CharacterProfileCard character={character} userType={userType} />
      ) : (
        <div className="text-2xl">Sorry Shiki is set to private</div>
      )}
      <br />
    </div>
  );
};

export default CharacterProfileContainer;
