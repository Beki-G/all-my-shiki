import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import { UseUserSession } from "../../../utils/UserContext";
import teamAPI from "../../../utils/teamAPI";

const UpdateTeamBtn = ({
  setIsEdit,
  isEdit,
  teammates,
  isPrivate,
  teamName,
  format,
  notes,
  onmyoji,
  teamId,
}) => {
  const { userProfile } = UseUserSession();
  const [modalText, setModalText] = useState({ text: "" });
  const [btnMsg, setBtnMsg] = useState("Edit");
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e) => {
    if (isEdit) {
      setBtnMsg("Edit");
      onSave(e);
    } else {
      setBtnMsg("Save");
      setIsEdit(!isEdit);
    }
  };
  const onSave = async (e) => {
    e.preventDefault();

    const newTeammates = teammates.map((teammate) => {
      return teammate._id;
    });

    const newTeam = {
      title: teamName,
      teammates: newTeammates,
      onmyoji: onmyoji,
      userNotes: notes,
      creatorId: userProfile._id,
      isPrivate: isPrivate,
      teamFormat: format.teammates + " shiki + " + format.onmyoji,
      dateModified: new Date(),
    };

    const isValid = checkIsValidTeam(newTeam);
    if (isValid) {
      const inDBTeam = await teamAPI.updateTeamById(teamId, newTeam);
      setIsEdit(!isEdit);
      setModalText({ text: `${inDBTeam.title} was updated in the database!` });
    }

    setIsOpen(true);
  };

  const checkIsValidTeam = (team) => {
    if (!team.title) {
      setModalText({ text: "Please Name your team!" });
      return false;
    }

    if (team.title === "Please name!") {
      setModalText({ text: "Please Name your team!" });
      return false;
    }

    if (team.onmyoji === null) {
      setModalText({ text: "Please select an Onmyoji or Event Shiki!" });
      return false;
    }

    
    return true;
  };

  const onClose = () => {
    setIsOpen(false);

  };

  return (
    <div>
      <button
        onClick={onClick}
        className="  sm:mt-6 uppercase mx-auto shadow bg-old-mauve hover:bg-cinnabar focus:ring-2 ring-chestnut focus:outline-none text-white text-xs py-3 px-10 rounded"
      >
        {btnMsg}
      </button>
      <Modal open={isOpen} onClose={onClose}>
        {modalText.text}
      </Modal>
    </div>
  );
};

export default UpdateTeamBtn;
