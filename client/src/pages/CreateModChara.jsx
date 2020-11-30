import React, { useEffect, useState } from "react";
import CreateModCharaBaseDropDown from "../components/CreateModCharaBaseDropDown/CreateModCharaBaseDropDown";
import CreateModCharaProfileContainer from "../components/CreateModCharaProfileContainer/CreateModCharaProfileContainer";
import Navbar from "../components/Navbar/Navbar";
import characterAPI from "../utils/characterAPI";

const CreateModChara = () => {
  const [baseCharacter, setBaseCharacter] = useState({ base: null });
  const [characterProfile, setCharacterProfile] = useState();

  useEffect(() => {
    if (baseCharacter.base !== null) {
      getCharacterProfile(baseCharacter.base);
    }
    
  }, [baseCharacter]);

  const getCharacterProfile = async (characterId) => {
    const profile = await characterAPI.getCharacterProfile(characterId);
    // console.log("profile: ", profile);
    setCharacterProfile(profile);
    // console.log("profile.tags", profile.tags);
  };

  return (
    <div >
      <div className="bg-black">
        <Navbar />
      </div>
      <br />
      <div className="w-10/12 mx-auto">
        <CreateModCharaBaseDropDown setBaseCharacter={setBaseCharacter} />
        {characterProfile?.tags ? (
          <CreateModCharaProfileContainer characterProfile={characterProfile} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CreateModChara;
