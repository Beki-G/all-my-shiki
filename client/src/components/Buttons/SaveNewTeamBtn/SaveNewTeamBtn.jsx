import React, { useState } from "react";
import teamAPI from "../../../utils/teamAPI";
import Modal from "../../Modal/Modal";
import { Redirect } from "react-router-dom";
import { UseUserSession } from "../../../utils/UserContext";

const SaveNewTeamBtn = ({
  isPrivate,
  teamName,
  format,
  teammates,
  notes,
  onmyoji,
}) => {
  const { userProfile } = UseUserSession();

  const [isValidTeam, setIsValidTeam] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState({ text: "" });
  const [redirectLink, setRedirectLink] = useState({
    redirect: null,
    id: null,
  });

  const onClose = () => {
    setIsOpen(false);
    if (isValidTeam) {
      setRedirectLink({ redirect: "/team/" + redirectLink.id });
    }
  };

  const onClick = async (e) => {
    e.preventDefault();

    const newTeammates = teammates.map((teammate) => {
      return teammate.id;
    });

    const newTeam = {
      title: teamName,
      teammates: newTeammates,
      onmyoji: onmyoji,
      userNotes: notes,
      creatorId: userProfile._id,
      isPrivate: isPrivate,
      teamFormat: format.teammates + " shiki + " + format.onmyoji,
    };

    // const newProfile = await modCharacterAPI.createModCharacter(newChara);
    const isValid = checkIsValidTeam(newTeam);
    if (isValid) {
      const inDBTeam = await teamAPI.createTeam(newTeam);
      setModalText({ text: `${inDBTeam.title} was added to the database!` });
      setRedirectLink({
        ...redirectLink,
        id: inDBTeam._id,
      });
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

    setIsValidTeam(true);
    return true;
  };

  return (
    <div>
      {redirectLink.redirect ? (
        <Redirect to={redirectLink.redirect} />
      ) : (
        <div>
          <button
            className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:ring focus:outline-none text-white text-xs py-3 px-10 rounded"
            onClick={onClick}
          >
            Create Team
          </button>
          <Modal open={isOpen} onClose={onClose}>
            {modalText.text}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default SaveNewTeamBtn;
