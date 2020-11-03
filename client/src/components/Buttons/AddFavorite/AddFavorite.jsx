import React, { useState } from "react";
import userAPI from "../../../utils/userAPI";
import { UseUserSession } from "../../../utils/userContext";
import Modal from "../../Modal/Modal";

const AddFavorite = ({ characterId }) => {
  const { userProfile } = UseUserSession();
  const [isOpen, setIsOpen] = useState(false);

  async function onClick(e) {
    if (userProfile._id) {
      const { favorites } = await userAPI.addFavorite(
        userProfile._id,
        e.target.id
      );

      userProfile.favorites = favorites;
    } else {
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
        Please Sign In!
      </Modal>
    </>
  );
};

export default AddFavorite;
