/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DashboardModCharaCard from "../DashboardModCharaCard/DashboardModCharaCard";
import { UseUserSession } from "../../utils/UserContext";
import modCharacterAPI from "../../utils/modCharacterAPI";
import AddButton from "../Buttons/AddButton/AddButton";

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
    <div className="mx-auto m-0 w-3/4 bg-middle-red p-4 rounded-md">
      <div className=" flex items-center">
        <h1 className=" mt-4 mb-4 text-2xl mr-2 font-semibold">
          My Shikigami 
        </h1>

        <AddButton type={"modChara"}/>
      </div>
      <p className="italic mb-2">If you delete a shiki you will delete the team they are in too</p>

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
          <p className="text-white">You will see all your personal Shikigami here. Use the plus button to start building one!</p>
        )}
      </div>
    </div>
  );
};

export default DashboardModChara;
