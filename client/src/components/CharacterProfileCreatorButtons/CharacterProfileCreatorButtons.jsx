import React from "react";
import { CharacterProfileCreatorEditBtn } from "../Buttons/CharacterProfileCreatorEditBtn/CharacterProfileCreatorEditBtn";
import TogglePrivate from "../TogglePrivate/TogglePrivate";
import AddFavoriteFromProfile from "../Buttons/AddFavoriteFromProfile/AddFavoriteFromProfile";


const CharacterProfileCreatorButtons = ({
  isEdit,
  setIsEdit,
  isCharacterPrivate,
  setIsCharacterPrivate,
  onUpdate,
  onFavorite,
  isFavorite
}) => {
  
  return (
    <div className="sm:float-right justify-end">
      <div>
        <CharacterProfileCreatorEditBtn
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          onUpdate={onUpdate}
        />
        <AddFavoriteFromProfile onClick={onFavorite} isFavorite={isFavorite}/>
      </div>

      <div className="sm:float-right">
        <TogglePrivate
          isEdit={isEdit}
          isCharacterPrivate={isCharacterPrivate}
          setIsCharacterPrivate={setIsCharacterPrivate}
        />
      </div>
      
    </div>
  );
};

export default CharacterProfileCreatorButtons;
