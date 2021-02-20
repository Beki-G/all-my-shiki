import React from "react";
import characterAPI from "../../utils/characterAPI";

function TagResultsLink({ name, id, setCharacterProfile, setIsCharacter }) {
  async function onClick(e) {
    e.preventDefault();
    const characterId = e.target.getAttribute("data-id");
    const characterAreaEl = await getProfile(characterId);
    characterAreaEl.scrollIntoView({behavior:"smooth"});
    console.log('characterProfileArea is: ', characterAreaEl)
  }

  async function getProfile(characterId) {
    const characterProfile = await characterAPI.getCharacterProfile(
      characterId
    );
    setCharacterProfile(characterProfile);
    setIsCharacter(true);
    return document.getElementById("characterTraits");
  }

  return (
    <div>
      <a href={"/"} data-id={id} onClick={onClick}>
        {name}
      </a>
    </div>
  );
}

export default TagResultsLink;
