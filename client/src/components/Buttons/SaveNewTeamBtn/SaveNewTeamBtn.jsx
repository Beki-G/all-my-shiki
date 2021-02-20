import React, { useState } from "react";
import teamAPI from "../../../utils/teamAPI";
import Modal from "../../Modal/Modal";
import { Redirect } from "react-router-dom";
import { UseUserSession } from "../../../utils/UserContext";

const SaveNewTeamBtn = ({ team }) => {
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

    console.log("Team is: ", team);

    const newTeammates = team.teammates.map((teammate) => {
      return teammate.id;
    });

    const newTeam = {
      title: team.teamName,
      teammates: newTeammates,
      onmyoji: team.onmyoji,
      userNotes: team.notes,
      creatorId: userProfile._id,
      isPrivate: team.isPrivate,
      teamFormat:
        team.composition.numOfTeammates +
        " shiki + " +
        team.composition.hostType,
    };

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
      console.log("Team Title non existent")
      return false;
    }

    if (team.title === "Please name!" || team.title==="Team name") {
      setModalText({ text: "Please Name your team!" });
      console.log("team tile has default name")
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
            className="block uppercase mx-auto shadow bg-old-mauve hover:bg-cinnabar font-bold text-white focus:outline-none focus:ring-2 ring-chestnut text-xs py-3 px-10 rounded"
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
