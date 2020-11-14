import React from "react";
import modCharacterAPI from "../../../utils/modCharacterAPI";
import userAPI from "../../../utils/userAPI"
import { UpdateUserSession, UseUserSession } from "../../../utils/UserContext";

export const DeleteCharacterButton = ({ characterId, characterType }) => {
  const updateUserData = UpdateUserSession();
  const { userProfile } = UseUserSession();

  async function onClick(e) {
    e.preventDefault();

    switch (characterType) {
      case "modified":
        await modCharacterAPI.deleteModifiedCharacter(characterId);
        break;
      case "favorite":
        await userAPI.removeFavorite(userProfile._id, characterId);
        break;

      default:
          console.log(characterType)
          console.log(characterId)
        break;
    }

    updateUserData();

  }

  return (
    <button
      className="float-right bg-gray-700 hover:bg-red-700 text-white font-semibold px-3 rounded-full text-right"
      onClick={onClick}
    >
      x
    </button>
  );
};
