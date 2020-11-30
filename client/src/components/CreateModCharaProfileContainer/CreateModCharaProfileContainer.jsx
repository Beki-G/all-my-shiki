import React, { useState } from "react";
import SaveNewModCharaBtn from "../Buttons/SaveNewModCharaBtn/SaveNewModCharaBtn";
import CreateModCharaSouls from "../CreateModCharaSouls/CreateModCharaSouls";
import CreateModCharaTraits from "../CreateModCharaTraits/CreateModCharaTraits";
import TogglePrivate from "../TogglePrivate/TogglePrivate";
import { UseUserSession } from "../../utils/UserContext";

const CreateModCharaProfileContainer = ({ characterProfile }) => {
  const { userProfile } = UseUserSession();

  const [isPrivate, setIsPrivate] = useState(true);
  const [userNotes, setUserNotes] = useState({notes:""})
  const [soulSets, setSoulSets] = useState({
    mainSet: "N/A",
    subSet: "N/A",
  });
  const [soulStats, setSoulStats] = useState({
    slotTwo: "N/A",
    slotFour: "N/A",
    slotSix: "N/A",
  });
  const [modCharaName, setModCharaName] = useState({
    name: characterProfile.name,
  });

  const soulSetOnChange = (e) => {
    const setType = e.target.selectedOptions[0].getAttribute("settype");

    setSoulSets({
      ...soulSets,
      [setType]: e.target.value,
    });
  };

  const soulStatsOnChange = (e) => {
    e.preventDefault();
    const slot = e.target.selectedOptions[0].getAttribute("slot");
    let slotName;

    switch (slot) {
      case "2":
        slotName = "slotTwo";
        break;
      case "4":
        slotName = "slotFour";
        break;
      case "6":
        slotName = "slotSix";
        break;

      default:
        break;
    }

    setSoulStats({
      ...soulStats,
      [slotName]: e.target.value,
    });
  };

  return (
    <div>
      <br />
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
        <input
          className="text-3xl rounded-md bg-gray-200 focus:bg-white font-semibold focus:ring-2 ring-sky-blue focus:outline-none sm:w-1/2"
          placeholder={characterProfile.name}
          onChange={(e) => {
            setModCharaName({ name: e.target.value });
          }}
        />
        <br />
        <TogglePrivate
          isEdit={true}
          isCharacterPrivate={isPrivate}
          setIsCharacterPrivate={setIsPrivate}
        />
      </div>
        <br />
        <label className="align-top" htmlFor="userNotes">
        Shikigami Notes:{" "}
      </label>
      <textarea
        id="userNotes"
        placeholder={userNotes.notes}
        onChange={(e) => {
          setUserNotes({ notes: e.target.value });
        }}
        className="border focus:border-blue-500 focus:outline-none bg-gray-200 focus:bg-white  rounded-md"
      ></textarea>
      <br />
      <CreateModCharaSouls
        soulSets={soulSets}
        soulSetOnChange={soulSetOnChange}
        soulStats={soulStats}
        soulStatsOnChange={soulStatsOnChange}
      />

      <br />
      <CreateModCharaTraits tags={characterProfile.tags} />
      <div className="flex">
        <SaveNewModCharaBtn
          characterId={characterProfile._id}
          name={modCharaName.name}
          soulSets={soulSets}
          soulStats={soulStats}
          isPrivate={isPrivate}
          creatorId={userProfile._id}
          userNotes={userNotes.notes}
        />
      </div>
      <br />
    </div>
  );
};

export default CreateModCharaProfileContainer;
