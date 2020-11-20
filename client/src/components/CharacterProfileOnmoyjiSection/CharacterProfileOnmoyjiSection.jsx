import React from "react";

const CharacterProfileOnmoyjiSection = ({
  character,
  creatorNotes,
  setCreatorNotes,
  isEdit,
}) => {
  return (
    <div>
      <div className="text-2xl">Onmoyji</div>
      <p>Username: {character.creatorId.userName}</p>
      <p>Guild: {character.creatorId.guild}</p>
      <label className="align-top" htmlFor="userNotes">
        Shikigami Notes:{" "}
      </label>
      <textarea
        id="userNotes"
        placeholder={creatorNotes.notes ? creatorNotes.notes : "N/A"}
        onChange={(e) => {
          setCreatorNotes({ notes: e.target.value });
        }}
        disabled={!isEdit}
        className="border focus:border-blue-500 border-blue-300"
      ></textarea>
    </div>
  );
};

export default CharacterProfileOnmoyjiSection;
