import React, { useState } from "react";
import modCharacterAPI from "../../../utils/modCharacterAPI";
import Modal from "../../Modal/Modal";
import { Redirect } from "react-router-dom";

const SaveNewModCharaBtn = ({
  characterId,
  name,
  soulSets,
  soulStats,
  isPrivate,
  creatorId,
  userNotes,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState({ text: "" });
  const [redirectLink, setRedirectLink] = useState({
    redirect: null,
    id: null,
  });

  const isValidModChara = (character) => {
    // console.log("character: ", character)
    
    if (character.soulsetMain ==="N/A") {
      setModalText({ text: "Please add a 4 soul set to your shiki" });
      return false;
    }
    if (character.soulsetSub ==="N/A") {
      setModalText({ text: "Please add a 2 soul set to your shiki" });
      return false;
    }
    return true;
  };
  const onClick = async (e) => {
    e.preventDefault();

    const newChara = {
      name: name,
      character: characterId,
      soulsetMain: soulSets.mainSet,
      soulsetSub: soulSets.subSet,
      soulsetSlotTwo: soulStats.slotTwo,
      soulsetSlotFour: soulStats.slotFour,
      soulsetSlotSix: soulStats.slotSix,
      creatorId: creatorId,
      isPrivate: isPrivate,
      userNotes: userNotes,
    };

    const isValid = isValidModChara(newChara);

    // console.log("isValid is: ", isValid)

    if (isValid) {
      const newProfile = await modCharacterAPI.createModCharacter(newChara);
      setModalText({ text: `${newProfile.name} was added to the database!` });
      setRedirectLink({
        ...redirectLink,
        id: newProfile._id,
      });
    }

    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    if (redirectLink.id) {
      setRedirectLink({ redirect: "/shiki/" + redirectLink.id });
    }
  };

  return (
    <div>
      {redirectLink.redirect ? (
        <Redirect to={redirectLink.redirect} />
      ) : (
        <div>
          <button
            className="block uppercase mx-auto shadow bg-old-mauve hover:bg-cinnabar  focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded ring-cinnabar"
            onClick={onClick}
          >
            Create
          </button>
          <Modal open={isOpen} onClose={onClose}>
            {modalText.text}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default SaveNewModCharaBtn;
