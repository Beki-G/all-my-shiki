/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Loading from "../components/Auth/Loading";
import modCharacterAPI from "../utils/modCharacterAPI";
import { UseUserSession } from "../utils/UserContext";
import CharacterProfileContainer from "../components/CharacterProfileContainer/CharacterProfileContainer";

const CharacterProfile = () => {
  const { id } = useParams();
  const { userProfile } = UseUserSession();

  const [isInDatabase, setIsInDatabase] = useState("checking");
  const [character, setCharacter] = useState();
  const [isPrivate, setIsPrivate] = useState(true);

  useEffect(() => {
    checkDatabase();
  }, [userProfile]);

  async function checkDatabase() {
    const characterProfile = await modCharacterAPI.getModCharacterById(id);
    if (characterProfile.error) {
      setIsInDatabase(false);

    }
    if (characterProfile.name) {
      setCharacter(characterProfile);

      setIsPrivate(characterProfile.isPrivate);

      setIsInDatabase(true);
    }
  }

  return (
    <div className="justify-end rounded font-sans ">
      <div className="bg-black">
        <Navbar />
      </div>
      <br />
      <div className="w-3/4 m-auto">
        {isInDatabase === "checking" ? (
          <Loading />
        ) : isInDatabase ? (
          <CharacterProfileContainer
            character={character}
            isPrivate={isPrivate}
          />
        ) : (
          "Invalid link, please try a different link."
        )}
      </div>
    </div>
  );
};

export default CharacterProfile;
