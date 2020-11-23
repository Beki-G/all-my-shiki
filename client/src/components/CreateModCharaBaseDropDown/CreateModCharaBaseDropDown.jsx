import React, { useState, useEffect } from "react";
import characterAPI from "../../utils/characterAPI";

const CreateModCharaBaseDropDown = ({ setBaseCharacter }) => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    getAllCharacterNames();
  }, []);

  const getAllCharacterNames = async () => {
    const names = await characterAPI.getCharacterNames();
    setAllCharacters(names);
  };

  const onChange = (e) =>{
    // console.log('e.target', e.target.value)
    setBaseCharacter({ base: e.target.value})
  }

  return (
    <div>
      <label>
        Choose a Shikigami to build
        <br />
        <select onChange={onChange}>
          {allCharacters.map((character) => {
            return (
              <option key={character._id} value={character._id}>
                {character.name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default CreateModCharaBaseDropDown;
