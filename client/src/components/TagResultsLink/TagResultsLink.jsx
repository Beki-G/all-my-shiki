import React from "react";
import characterAPI from "../../utils/characterAPI";

function TagResultsLink({ name, id, setCharacterProfile, setIsCharacter }) {
  //sets string to Snake case
  const snakeCase = (string) => {
    return string
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join("_");
  };

  //links to show the shiki
  const url = "#" + snakeCase(name);

  function onClick(e) {
    e.preventDefault();
    const characterId = e.target.getAttribute("data-id");
    getProfile(characterId);
  }

  async function getProfile(characterId) {
    const characterProfile = await characterAPI.getCharacterProfile(
      characterId
    );
    setCharacterProfile(characterProfile);
    setIsCharacter(true);
  }

  return (
    <div>
      <a href={url} data-id={id} onClick={onClick}>
        {name}
      </a>
    </div>
  );
}

export default TagResultsLink;
