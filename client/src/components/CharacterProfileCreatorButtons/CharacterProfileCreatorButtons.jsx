import React from "react";
import { CharacterProfileCreatorEditBtn } from "../Buttons/CharacterProfileCreatorEditBtn/CharacterProfileCreatorEditBtn";
import TogglePrivate from "../TogglePrivate/TogglePrivate";

const CharacterProfileCreatorButtons = ({
  isEdit,
  setIsEdit,
  isCharacterPrivate,
  setIsCharacterPrivate,
  onUpdate
}) => {
  return (
    <div className="sm:float-right justify-end">
      <CharacterProfileCreatorEditBtn isEdit={isEdit} setIsEdit={setIsEdit} onUpdate={onUpdate} />
      <TogglePrivate
        isEdit={isEdit}
        isCharacterPrivate={isCharacterPrivate}
        setIsCharacterPrivate={setIsCharacterPrivate}
      />
    </div>
  );
};

export default CharacterProfileCreatorButtons;
