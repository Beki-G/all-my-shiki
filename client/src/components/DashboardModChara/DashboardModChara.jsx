/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardModCharaCard from "../DashboardModCharaCard/DashboardModCharaCard";
import { UseUserSession } from "../../utils/UserContext";
import modCharacterAPI from "../../utils/modCharacterAPI";

const DashboardModChara = () => {
  const { userProfile } = UseUserSession();

  const [userModCharacter, setUserModCharacter] = useState([]);

  useEffect(() => {
    getModCharacters();
  }, [userProfile]);

  async function getModCharacters() {
    if (userProfile._id) {
      const allUserModCharacters = await modCharacterAPI.getAllUserModChara(
        userProfile._id
      );
      setUserModCharacter(allUserModCharacters);
    }
  }

  return (
    <div className="flex flex-col mx-auto m-0 w-3/4 bg-teal-200 p-4 rounded-md">
      <h1 className="mt-2 mb-4 text-2xl font-semibold">My Shikigami</h1>
      <div className="overflow-y-auto flex flex-wrap -mx-1 overflow-hidden md:-mx-1 h-64">
        {userModCharacter && userModCharacter.length > 0 ? (
          userModCharacter.map((character) => {
            return (
              <DashboardModCharaCard
                key={character._id}
                name={character.name}
                dateCreated={character.dateCreated}
                userNotes={character.userNotes}
                characterId={character._id}
                soulSetMain={character.soulsetMain?.name}
                soulSetSub={character.soulsetSub?.name}
              />
            );
          })
        ) : (
          <p>You will see all your personal Shikigami here</p>
        )}
      </div>
    </div>
  );
};

export default DashboardModChara;
