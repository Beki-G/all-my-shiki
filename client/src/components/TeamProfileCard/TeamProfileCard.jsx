/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import modCharacterAPI from "../../utils/modCharacterAPI";
import CreateTeamCharactersDropdown from "../CreateTeamCharactersDropdown/CreateTeamCharactersDropdown";
import { UseUserSession } from "../../utils/UserContext";
import TogglePrivate from "../TogglePrivate/TogglePrivate";
import UpdateTeamBtn from "../Buttons/UpdateTeamBtn/UpdateTeamBtn";
import { Link } from "react-router-dom";
import CreateTeamOnmyojiDropdown from "../CreateTeamOnmyojiDropDown/CreateTeamOnmyojiDropDown";
import { useParams } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton/LoginButton";

const TeamProfileCard = ({ team, userType }) => {
  const { userProfile } = UseUserSession();
  const { id } = useParams();

  const [teamFormat, setTeamFormat] = useState({
    teammates: 5,
    onmyoji: "onmyoji",
  });
  const [teammates, setTeammates] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [onmyojiBase, setOnmyojiBase] = useState({ onmyoji: team.onmyoji });
  const [userNotes, setUserNotes] = useState({ notes: team.userNotes });
  const [isPrivate, setIsPrivate] = useState(team.isPrivate);
  const [teamName, setTeamName] = useState({ teamName: team.title });
  const [isUserEdit, setIsUserEdit] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    getAllCharacterNames();
    const teamForm = team.teamFormat.trim().split(" ");
    setTeamFormat({
      teammates: parseInt(teamForm[0]),
      onmyoji: teamForm[teamForm.length - 1],
    });
    setTeammates(team.teammates);
  }, [userProfile, toggle]);

  const getAllCharacterNames = async () => {
    if (userProfile._id) {
      const names = await modCharacterAPI.getAllUserModChara(userProfile._id);

      setAllCharacters(names);
    }
  };

  const onTeamCharacterChange = (e) => {
    setToggle(true);

    const newTeammate = allCharacters.filter((teammate) => {
      return teammate._id === e.target.value;
    });

    const newTeammates = [...teammates];
    newTeammates.splice(
      e.target.selectedOptions[0].getAttribute("data-index"),
      1,
      newTeammate[0]
    );
    setTeammates(newTeammates);
  };

  const onOnmyojiChange = (e) => {
    setOnmyojiBase({ onmyoji: e.target.value });
  };

  return (
    <div>
      <div className="flex flex-col-reverse mt-6 sm:flex-row sm:justify-between">
        <input
          className="text-3xl rounded-md bg-gray-200 focus:bg-white font-semibold focus:border-blue-500 focus:outline-none sm:w-1/2 my-4 "
          placeholder={team.title}
          onChange={(e) => {
            setTeamName({ teamName: e.target.value });
          }}
          disabled={!isUserEdit}
        />
        <div className=" flex sm:flex-row flex-col">
          <TogglePrivate
            isEdit={isUserEdit}
            isCharacterPrivate={isPrivate}
            setIsCharacterPrivate={setIsPrivate}
          />
        </div>
      </div>

      <div className="mb-4 font-semibold">
        Team Format:{" "}
        {teamFormat.onmyoji === "none" ? "6 shiki (Draft)" : team.teamFormat}
      </div>
      <CreateTeamOnmyojiDropdown
        host={teamFormat.onmyoji}
        label={"Onmyoji: "}
        isEdit={isUserEdit}
        defaultVal={onmyojiBase.onmyoji}
        onChange={onOnmyojiChange}
      />

      <div className="flex flex-row flex-wrap bg-gray-300 rounded-md">
        {teammates.map((teammate, index) => {
          return (
            <CreateTeamCharactersDropdown
              characters={allCharacters}
              index={index}
              defaultValue={teammate._id}
              isEdit={isUserEdit}
              onChange={onTeamCharacterChange}
              key={index}
            />
          );
        })}
      </div>

      <div className="flex flex-wrap -mx-1 overflow-hidden mb-2 mt-2">
        {toggle
          ? teammates.map((teammate, index) => {
              return (
                <div
                  key={index}
                  className="my-1 px-1 w-full overflow-hidden sm:w-1/2 lg:w-1/5"
                >
                  <div className="max-w-sm rounded bg-white">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl tracking-wide">
                        {teammate.name}
                      </div>
                      <div className="text-gray-500 text-sm mb-3">
                        {teammate.character.name}
                      </div>
                      <div className="text-gray-700 text-base">
                        <div className=" font-medium underline">Soul Sets</div>
                        <div>4 set: {teammate.soulsetMain?.name || "N/A"}</div>
                        <div>2 set: {teammate.soulsetSub?.name || "N/A"}</div>
                      </div>
                    </div>
                    <div className="mx-4 mt-2 mb-4">
                      <Link
                        className="tracking-wider font-bold text-purple-700 hover:bg-purple-100 rounded p-2 inline-block"
                        to={"/shiki/" + teammate._id}
                      >
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <textarea
          className="focus:outline-none focus:ring-2 focus:ring-purple-700 w-full bg-gray-200 rounded-md"
          placeholder={team.userNotes}
          onChange={(e) => setUserNotes({ notes: e.target.value })}
          disabled={!isUserEdit}
        ></textarea>
      </div>

      <div className="my-4 block text-center">
        {userType==="creator"? <UpdateTeamBtn
          setIsEdit={setIsUserEdit}
          isEdit={isUserEdit}
          teammates={teammates}
          isPrivate={isPrivate}
          teamName={teamName.teamName}
          onmyoji={onmyojiBase.onmyoji}
          format={teamFormat}
          notes={userNotes.notes}
          teamId={id}
        />: userType==="user"? (
          <div>Future like button</div>
        ): (
          <LoginButton />
        )}
        
      </div>
    </div>
  );
};

export default TeamProfileCard;
