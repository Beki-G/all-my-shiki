import React, { useState } from "react";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import CharacterProfileCreatorButtons from "../CharacterProfileCreatorButtons/CharacterProfileCreatorButtons";
import CharacterProfileSouls from "../CharacterProfileSouls/CharacterProfileSouls";

export const CharacterProfileCard = ({ character, userType }) => {
  // console.log("character", character);

  const [soulSets, setSoulSets] = useState({
    mainSet: character.soulsetMain?._id || "N/A",
    subSet: character.soulsetSub?._id || "N/A",
  });
  const [soulStats, setSoulStats] = useState({
    slotTwo: character?.soulsetSlotTwo || "N/A",
    slotFour: character?.soulsetSlotFour || "N/A",
    slotSix: character?.soulsetSlotSix || "N/A",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [characterName, setCharacterName] =useState({name:null})
  const [creatorNotes, setCreatorNotes]=useState({notes:character.userNotes|| null})
  const [isCharacterPrivate, setIsCharacterPrivate] = useState(
    character.isPrivate
  );

  const mainSoulSetOnChange = (e) => {
    e.preventDefault();
    setSoulSets({
      ...soulSets,
      mainSet: e.target.value,
    });
  };
  const subSoulSetOnChange = (e) => {
    e.preventDefault();
    setSoulSets({
      ...soulSets,
      subSet: e.target.value,
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
      {userType === "creator" ? (
        <CharacterProfileCreatorButtons
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isCharacterPrivate={isCharacterPrivate}
          setIsCharacterPrivate={setIsCharacterPrivate}
        />
      ) : userType === "user" ? (
        <div>You are not the creator</div>
      ) : (
        <LoginButton />
      )}

      <br />
      {!isEdit ? (
        <p className="text-3xl font-semibold">{character.name}</p>
      ) : (
        <input
        
          className="text-3xl font-semibold focus:border-blue-500"
          placeholder={character.name}
          onChange={(e)=>{setCharacterName({name:e.target.value})}}
        />
      )}

      {/* <p className="text-3xl font-semibold">{character.name}</p> */}
      <p className=" text-gray-700 mb-2">
        Shikigami: {character.character.name}
      </p>
      <hr />
      <br />

      <div>
        <div className="text-2xl">Onmoyji</div>
        <p>Username: {character.creatorId.userName}</p>
        <p>Guild: {character.creatorId.guild}</p>
        <label className="align-top" htmlFor="userNotes">
          Shikigami Notes:{" "}
        </label>
        <textarea
          id="userNotes"
          placeholder={creatorNotes.notes? creatorNotes.notes : "N/A"}
          onChange={(e)=>{setCreatorNotes({notes:e.target.value})}}
          disabled={!isEdit}
          className="border focus:border-blue-500 border-blue-300"
        ></textarea>
      </div>

      <br />

      <CharacterProfileSouls
        soulSets={soulSets}
        isEdit={isEdit}
        mainSoulSetOnChange={mainSoulSetOnChange}
        soulStats={soulStats}
        subSoulSetOnChange={subSoulSetOnChange}
        soulStatsOnChange={soulStatsOnChange}
      />

      <br />

      <div className="text-2xl">Traits</div>

      <ul className="list-disc list-inside">
        {character.character.tags.map((trait, index) => {
          return <li key={index}>{trait.tag}</li>;
        })}
      </ul>
      <br />
    </div>
  );
};
