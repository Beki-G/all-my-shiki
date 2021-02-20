/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../components/Navbar/Navbar";
import TeamFormatDropDown from "../components/TeamFormatDropDown/TeamFormatDropDown";
import modCharacterAPI from "../utils/modCharacterAPI";
import CreateTeamCharactersDropdown from "../components/CreateTeamCharactersDropdown/CreateTeamCharactersDropdown";
import { UseUserSession } from "../utils/UserContext";
import CreateTeamOnmyojiDropDown from "../components/CreateTeamOnmyojiDropDown/CreateTeamOnmyojiDropDown";
import TogglePrivate from "../components/TogglePrivate/TogglePrivate";
import SaveNewTeamBtn from "../components/Buttons/SaveNewTeamBtn/SaveNewTeamBtn";
import CreateTeamCharacterProfile from "../components/CreateTeamCharacterProfile/CreateTeamCharacterProfile";

export const CREATE_TEAM_ACTIONS = {
  SET_ALL_CHARACTER_PROFILES: "set-all-character-profiles",
  SET_TEAMNAME: "set-teamname",
  TOGGLE_ISPRIVATE: "toggle-isPrivate",
  CHANGE_TEAMMATES: "change-teammate-count",
  CHANGE_TEAM_FORMAT: "change-team-format",
  CHANGE_ONMYOJI: "change-onmyoji",
  SET_USERNOTES: "set-userNotes",
};

const reducer = (team, action) => {
  switch (action.type) {
    case CREATE_TEAM_ACTIONS:
      break;
    case CREATE_TEAM_ACTIONS.SET_TEAMNAME:
      return {
        ...team,
        teamName: action.payload.name,
      };

    case CREATE_TEAM_ACTIONS.TOGGLE_ISPRIVATE:
      //toggle is Private on team
      return {
        ...team,
        isPrivate: action.payload.isPrivate,
      };
    case CREATE_TEAM_ACTIONS.CHANGE_TEAMMATES:
      return {
        ...team,
        teammates: action.payload.teammates,
      };
    case CREATE_TEAM_ACTIONS.CHANGE_TEAM_FORMAT:
      return {
        ...team,
        composition: {
          numOfTeammates: action.payload.teammateCount,
          hostType: action.payload.hostType,
        },
      };
    case CREATE_TEAM_ACTIONS.CHANGE_ONMYOJI:
      return {
        ...team,
        onmyoji: action.payload.onmyoji,
      };
    case CREATE_TEAM_ACTIONS.SET_USERNOTES:
      return {
        ...team,
        notes: action.payload.notes,
      };
    default:
      console.log("Default in Create Team Actions: ", team);
      return {
        ...team,
      };
  }
};

const CreateTeam = () => {
  const { userProfile } = UseUserSession();

  const [team, dispatch] = useReducer(reducer, {
    teamName: "Team name",
    format: "",
    teammates: [],
    notes: "",
    onmyoji: "Seimei",
    isPrivate: true,
    composition: {
      numOfTeammates: 5,
      hostType: "onmyoji",
    },
  });

  const [allCharacters, setAllCharacters] = useState([]);
  const [userHasCharacters, setUserHasCharacters] = useState({
    isCharacters: false,
  });

  useEffect(() => {
    getAllCharacterNames();
  }, [userProfile]);

  const getAllCharacterNames = async () => {
    if (userProfile._id) {
      const names = await modCharacterAPI.getAllUserModChara(userProfile._id);
      if (names.length <= 0) setUserHasCharacters({ isCharacters: false });
      else {
        setAllCharacters(names);
        const defaultTeam = setTeamArr(5, names[0]);
        setUserHasCharacters({ isCharacters: true });
        dispatch({
          type: CREATE_TEAM_ACTIONS.CHANGE_TEAMMATES,
          payload: { teammates: defaultTeam },
        });
      }
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
    dispatch({
      type: CREATE_TEAM_ACTIONS.CHANGE_TEAM_FORMAT,
      payload: { teammateCount: numOfTeammates, hostType: onmyoji },
    });
    const mates = setTeamArr(numOfTeammates, allCharacters[0]);
    dispatch({
      type: CREATE_TEAM_ACTIONS.CHANGE_TEAMMATES,
      payload: { teammates: mates },
    });
  };

  const onTeammatesChange = (e) => {
    const charaId = e.target.value;
    const index = e.target.selectedOptions[0].getAttribute("data-index");
    const charaName = e.target.selectedOptions[0].getAttribute("name");
    const tempTeam = team.teammates;
    tempTeam.splice(index, 1, { teammate: charaName, id: charaId });
    // console.log("tempTeam: ", tempTeam);
    dispatch({
      type: CREATE_TEAM_ACTIONS.CHANGE_TEAMMATES,
      payload: { teammates: tempTeam },
    });
  };

  const onOnmyojiChange = (e) => {
    dispatch({
      type: CREATE_TEAM_ACTIONS.CHANGE_ONMYOJI,
      payload: { onmyoji: e.target.value },
    });
  };

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      {!userHasCharacters.isCharacters ? (
        <div className="w-5/6 mx-auto text-xl pt-6">
          Please build your own shiki first
        </div>
      ) : (
        <div className=" mx-auto w-4/5">
          <h1 className="text-2xl mb-4  mt-6">Create Team</h1>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
            <input
              className="text-3xl rounded-md bg-gray-100 focus:bg-white font-semibold focus:ring-2 focus:ring-sky-blue focus:outline-none sm:w-1/2 mb-4 ring-chestnut ring-1"
              placeholder={team.teamName}
              onChange={(e) => {
                dispatch({
                  type: CREATE_TEAM_ACTIONS.SET_TEAMNAME,
                  payload: { name: e.target.value },
                });
              }}
            />

            <div className="mb-4">
              <TogglePrivate
                isEdit={true}
                isCharacterPrivate={team.isPrivate}
                dispatch={dispatch}
              />
            </div>
          </div>

          <TeamFormatDropDown onChange={onTeamFormatChange} isEdit={true} />

          {team.composition.hostType === "onmyoji" ||
          team.composition.hostType === "event" ? (
            <CreateTeamOnmyojiDropDown
              label="Onmyoji: "
              host={team.composition.hostType}
              onChange={onOnmyojiChange}
              isEdit={true}
            />
          ) : (
            ""
          )}

          <div className=" bg-middle-red rounded-md sm:mt-3 py-2 flex flex-wrap flex-initial font-semibold px-2">
            {team.teammates.map((teammate, index) => {
              return (
                <CreateTeamCharactersDropdown
                  key={index}
                  characters={allCharacters}
                  index={index}
                  onChange={onTeammatesChange}
                  defaultValue={teammate.id}
                  isEdit={true}
                />
              );
            })}
          </div>
          <div className="md:mt-6 mt-3 mx-auto mb-4">
            <div className="flex flex-wrap -mx-1 overflow-hidden">
              {team.teammates.map((teammate, index) => {
                let profile = allCharacters.find(
                  (character) => character._id === teammate.id
                );
                return (
                  <CreateTeamCharacterProfile
                    key={index}
                    teammate={teammate}
                    profile={profile}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <textarea
              className="focus:outline-none focus:ring-2 focus:ring-sky-blue w-full bg-gray-100 rounded-md placeholder-black ring-chestnut ring-1 focus:bg-white"
              placeholder="Write your notes here"
              onChange={(e) =>
                dispatch({
                  type: CREATE_TEAM_ACTIONS.SET_USERNOTES,
                  payload: { notes: e.target.value },
                })
              }
            ></textarea>
          </div>
          <div className="my-4">
            <SaveNewTeamBtn team={team} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTeam;
