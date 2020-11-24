/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import TeamFormatDropDown from "../components/TeamFormatDropDown/TeamFormatDropDown";
import modCharacterAPI from "../utils/modCharacterAPI";
import CreateTeamCharactersDropdown from "../components/CreateTeamCharactersDropdown/CreateTeamCharactersDropdown";
import { UseUserSession } from "../utils/UserContext";
import CreateTeamTeamSummary from "../components/CreateTeamTeamSummary/CreateTeamTeamSummary";
import CreateTeamOnmyojiDropDown from "../components/CreateTeamOnmyojiDropDown/CreateTeamOnmyojiDropDown";
import TogglePrivate from "../components/TogglePrivate/TogglePrivate";
import SaveNewTeamBtn from "../components/Buttons/SaveNewTeamBtn/SaveNewTeamBtn";

const CreateTeam = () => {
  const { userProfile } = UseUserSession();

  const [teamFormat, setTeamFormat] = useState({
    teammates: 5,
    onmyoji: "onmyoji",
  });
  const [teammates, setTeammates] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [isReady, setIsReady] = useState(true);
  const [onmyojiBase, setOnmyojiBase] = useState({ onmyoji: "Seimei" });
  const [userNotes, setUserNotes] = useState({ notes: null });
  const [isPrivate, setIsPrivate] = useState(true);
  const [teamName, setTeamName] = useState({ teamName: "Please name!" });

  useEffect(() => {
    getAllCharacterNames();
  }, [userProfile]);

  const getAllCharacterNames = async () => {
    if (userProfile._id) {
      const names = await modCharacterAPI.getAllUserModChara(userProfile._id);
      setAllCharacters(names);
      const team = setTeamArr(5, names[0]);
      setTeammates(team);
      setIsReady(true);
    }
  };

  const setTeamArr = (num, defaultChar) => {
    const teamArr = [];

    for (let i = 0; i < num; i++) {
      teamArr.push({ teammate: defaultChar.name, id: defaultChar._id });
    }

    return teamArr;
  };

  const onTeamFormatChange = (e) => {
    e.preventDefault();
    const onmyoji = e.target.selectedOptions[0].getAttribute("data-onmyoji");
    const numOfTeammates = parseInt(e.target.value);
    setTeamFormat({ teammates: numOfTeammates, onmyoji: onmyoji });
    const mates = setTeamArr(numOfTeammates, allCharacters[0]);
    setTeammates(mates);
  };

  const onTeammatesChange = (e) => {
    const charaId = e.target.value;
    const index = e.target.selectedOptions[0].getAttribute("data-index");
    const charaName = e.target.selectedOptions[0].getAttribute("name");
    const tempTeam = teammates;
    tempTeam.splice(index, 1, { teammate: charaName, id: charaId });
    setTeammates(tempTeam);
    setIsReady(!isReady);
  };

  const onOnmyojiChange = (e) => {
    setOnmyojiBase({ onmyoji: e.target.value });
  };

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <div className=" mx-auto w-4/5">
        <h1 className="text-2xl mb-4  mt-6">Create Team</h1>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
          <input
            className="text-3xl rounded-md bg-gray-200 focus:bg-white font-semibold focus:border-blue-500 focus:outline-none sm:w-1/2 mb-4 "
            placeholder={teamName.teamName}
            onChange={(e) => {
              setTeamName({ teamName: e.target.value });
            }}
          />
          <div className="mb-4">
            <TogglePrivate
              isEdit={true}
              isCharacterPrivate={isPrivate}
              setIsCharacterPrivate={setIsPrivate}
            />
          </div>
        </div>

        <TeamFormatDropDown onChange={onTeamFormatChange} isEdit={true} />

        {teamFormat.onmyoji === "onmyoji" || teamFormat.onmyoji === "event" ? (
          <CreateTeamOnmyojiDropDown
            label="Onmyoji: "
            host={teamFormat.onmyoji}
            onChange={onOnmyojiChange}
          />
        ) : (
          ""
        )}

        <div className=" bg-gray-300 rounded-md sm:mt-3 py-2 flex flex-wrap  flex-initial ">
          {teammates.map((teammate, index) => {
            return (
              <CreateTeamCharactersDropdown
                key={index}
                characters={allCharacters}
                index={index}
                onChange={onTeammatesChange}
                defaultValue={teammate.id}
              />
            );
          })}
        </div>
        <div className="md:mt-6 mt-3 mx-auto">
          <CreateTeamTeamSummary
            teammates={teammates}
            allCharacters={allCharacters}
            isReady={isReady}
          />
        </div>
        <div>
          <textarea
            className="focus:outline-none focus:ring-2 focus:ring-purple-700 w-full bg-gray-200 rounded-md"
            placeholder="Write your notes here"
            onChange={(e) => setUserNotes({ notes: e.target.value })}
          ></textarea>
        </div>
        <div className="my-4">
          <SaveNewTeamBtn
            teamName={teamName.teamName}
            format={teamFormat}
            teammates={teammates}
            notes={userNotes.notes}
            onmyoji={onmyojiBase.onmyoji}
            isPrivate={isPrivate}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
