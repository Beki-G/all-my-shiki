import React from "react";

const CreateTeamCharactersDropdown = ({
  characters,
  index,
  defaultValue,
  onChange,
  isEdit
}) => {
  return (
    <div className="flex mx-auto md:flex-non">
      <label className="">
        {`Teammate ${index + 1}`}
        <select
          className="ml-2 my-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
          value={defaultValue}
          onChange={onChange}
          disabled={!isEdit}
        >
          {characters.map((character) => {
            return (
              <option
                key={character._id}
                data-index={index}
                value={character._id}
                name={character.name}
              >
                {character.name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default CreateTeamCharactersDropdown;
