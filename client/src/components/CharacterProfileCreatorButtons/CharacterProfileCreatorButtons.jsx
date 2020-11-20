import React from "react";
import { CharacterProfileCreatorEditBtn } from "../Buttons/CharacterProfileCreatorEditBtn/CharacterProfileCreatorEditBtn";
import TogglePrivate from "../TogglePrivate/TogglePrivate";

const CharacterProfileCreatorButtons = ({
  isEdit,
  setIsEdit,
  isCharacterPrivate,
  setIsCharacterPrivate,
}) => {
  return (
    <div className="sm:float-right justify-end">
      <CharacterProfileCreatorEditBtn isEdit={isEdit} setIsEdit={setIsEdit} />
      <TogglePrivate
        isEdit={isEdit}
        isCharacterPrivate={isCharacterPrivate}
        setIsCharacterPrivate={setIsCharacterPrivate}
      />
    </div>
  );
};

export default CharacterProfileCreatorButtons;
