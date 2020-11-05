import React from "react";
import AddFavorite from "../Buttons/AddFavorite/AddFavorite";

function HomeCharacterProfile({ characterProfile }) {
  const snakeCase = (string) => {
    return string
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join("_");
  };

  return (
    <div className="bg-pink-200 rounded text-center w-3/4 m-0 mx-auto mt-4 mb-4 pb-3 pt-3" id={snakeCase(characterProfile.name)}>
      <h3 className="text-lg font-semibold">{characterProfile.name}</h3>
      <p>{characterProfile.name} has the following traits:</p>
      <div className="flex flex-wrap -mx-1 overflow-hidden">
        {characterProfile.tags.length > 0
          ? characterProfile.tags.map((tag) => {
              return (
                <div
                  className="my-1 px-1 w-full overflow-hidden md:w-1/2 lg:w-1/3"
                  key={tag._id}
                >
                  {tag.tag}
                </div>
              );
            })
          : ""}
      </div>
      <br />
      <AddFavorite characterId={characterProfile._id} />
    </div>
  );
}

export default HomeCharacterProfile;