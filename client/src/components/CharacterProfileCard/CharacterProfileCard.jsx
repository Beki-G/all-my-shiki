import React from "react";
import { CharacterProfileCreatorEditBtn } from "../Buttons/CharacterProfileCreatorEditBtn/CharacterProfileCreatorEditBtn";
import LoginButton from "../Buttons/LoginButton/LoginButton";

export const CharacterProfileCard = ({ character, userType }) => {
//   console.log("character", character);
  return (
    <div>
      {userType === "creator" ? (
        <CharacterProfileCreatorEditBtn />
      ) : userType === "user" ? (
        <div>You are not the creator</div>
      ) : (
        <LoginButton />
      )}

      <br />
      <p className="text-3xl font-semibold">{character.name}</p>
      <p className=" text-gray-700">
        Shikigami: {character.character.name}
      </p>
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
          value={character.userNotes ? character.userNotes : "N/A"}
          disabled
        ></textarea>
      </div>
      <br />
      <div>
        <div className="text-2xl">Soul Sets</div>

        <label>
          Main Set:
          <select value={"N/A"} disabled>
            <option>N/A</option>
          </select>
        </label>
        <br />
        <label>
          Sub Set:
          <select value={"N/A"} disabled>
            <option>N/A</option>
          </select>
        </label>
      </div>
      <br />

      <div className="text-2xl">Traits</div>

      <ul className="list-disc list-inside">
        {character.character.tags.map((trait, index) => {
          return <li key={index}>{trait.tag}</li>;
        })}
      </ul>
    </div>
  );
};
