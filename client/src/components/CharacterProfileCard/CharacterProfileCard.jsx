/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import modCharacterAPI from "../../utils/modCharacterAPI";
import userAPI from "../../utils/userAPI";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import CharacterProfileCreatorButtons from "../CharacterProfileCreatorButtons/CharacterProfileCreatorButtons";
import CharacterProfileName from "../CharacterProfileName/CharacterProfileName";
import CharacterProfileOnmoyjiSection from "../CharacterProfileOnmoyjiSection/CharacterProfileOnmoyjiSection";
import CharacterProfileSouls from "../CharacterProfileSouls/CharacterProfileSouls";
import CharacterProfileTraits from "../CharacterProfileTraits/CharacterProfileTraits";
import { UseUserSession, UpdateUserSession } from "../../utils/UserContext"
import Modal from "../Modal/Modal"

export const CharacterProfileCard = ({ character, userType }) => {
  // console.log("character", character);
  const {userProfile} = UseUserSession();
  const {updateUser} = UpdateUserSession();
  const [modalMsg, setModalMsg] = useState({msg: ""})
  const [isModalOpen, setIsModalOpen] = useState(false)
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
  const [characterName, setCharacterName] = useState({
    name: character?.name || character.character.name,
  });
  const [creatorNotes, setCreatorNotes] = useState({
    notes: character.userNotes || null,
  });
  const [isCharacterPrivate, setIsCharacterPrivate] = useState(
    character.isPrivate
  );
  const [isFavorite, setIsFavorite] = useState({isFav: false})

  useEffect(()=>{
    if(userProfile.favorites && userProfile.favorites.includes(character._id)) setIsFavorite({isFav:true})
    
  }, [character._id, userProfile])

  const onUpdate = async (e)=> {
    e.preventDefault();
    const updates = {
      name: characterName.name,
      soulsetMain: soulSets.mainSet,
      soulsetSub: soulSets.subSet,
      soulsetSlotTwo: soulStats.slotTwo,
      soulsetSlotFour: soulStats.slotFour,
      soulsetSlotSix: soulStats.slotSix,
      userNotes:creatorNotes.notes,
      dateModified:new Date(),
      isPrivate:isCharacterPrivate
    }

    await modCharacterAPI.updateModCharacterById(character._id, updates)
    location.reload();
  }

  const onFavorite= async(e) =>{
    e.preventDefault();

    if (isFavorite.isFav) {
      console.log(`isFavorite: ${isFavorite.isFav}`)
      await userAPI.removeFavorite(userProfile._id, character._id)
      setModalMsg({msg:`${characterName.name} has been removed from your favorites`})

    } else {
      await userAPI.addFavorite(userProfile._id, character._id)
      setModalMsg({msg: `${characterName.name} has been added to your favorites`})
      
    }
    setIsFavorite({isFav: !isFavorite.isFav})
    
    updateUser();
    setIsModalOpen(true)
  }

  const soulSetOnChange = (e) => {
    e.preventDefault();
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
      {userType === "creator" ? (
        <CharacterProfileCreatorButtons
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isCharacterPrivate={isCharacterPrivate}
          setIsCharacterPrivate={setIsCharacterPrivate}
          onUpdate={onUpdate}
          onFavorite={onFavorite}
          isFavorite={isFavorite.isFav}
        />
      ) : userType === "user" ? (
        <div>Future like button</div>
      ) : (
        <LoginButton />
      )}

      <br />

      <CharacterProfileName
        isEdit={isEdit}
        character={character}
        setCharacterName={setCharacterName}
      />

      <hr />
      <br />
      
      <CharacterProfileOnmoyjiSection
        character={character}
        creatorNotes={creatorNotes}
        setCreatorNotes={setCreatorNotes}
        isEdit={isEdit}
      />

      <br />

      <CharacterProfileSouls
        soulSets={soulSets}
        isEdit={isEdit}
        soulSetOnChange={soulSetOnChange}
        soulStats={soulStats}
        soulStatsOnChange={soulStatsOnChange}
      />

      <br />

      <CharacterProfileTraits tags={character.character.tags} />
      <Modal open={isModalOpen} onClose={()=>setIsModalOpen(false)}>{modalMsg.msg}</Modal>
    </div>
  );
};
