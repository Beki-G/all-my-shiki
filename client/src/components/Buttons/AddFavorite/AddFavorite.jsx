import React, { useState } from "react";
import modCharacterAPI from "../../../utils/modCharacterAPI";
import userAPI from "../../../utils/userAPI";
import { UseUserSession } from "../../../utils/UserContext";
import Modal from "../../Modal/Modal";

const AddFavorite = ({ characterId, characterName }) => {
  const { userProfile } = UseUserSession();
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState({modalTxt:"Please Sign In!"});

  async function onClick(e) {
    if (userProfile._id) {
      const newModChara = await modCharacterAPI.createModCharaFromBase(userProfile._id, e.target.id, characterName)

      const { favorites } = await userAPI.addFavorite(
        userProfile._id,
        newModChara._id
      );

      userProfile.favorites = favorites;

      setModalText({modalTxt:"It's been added!"})
      setIsOpen(true);

    } else {
      setModalText({modalTxt:"Please Sign in!"})
      setIsOpen(true);
    }
  }

  return (
    <>
      <button
        className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
        id={characterId}
        onClick={onClick}
      >
        Add to Favorites
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {modalText.modalTxt}
      </Modal>
    </>
  );
};

export default AddFavorite;
