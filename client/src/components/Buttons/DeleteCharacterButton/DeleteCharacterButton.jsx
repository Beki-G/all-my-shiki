import React from 'react';
import modCharacterAPI from '../../../utils/modCharacterAPI'
import { UpdateUserSession } from '../../../utils/UserContext'

export const DeleteCharacterButton = ({characterId, characterType}) => {
    const   updateUserData = UpdateUserSession() 

    async function onClick(e){
        e.preventDefault()
        console.log("Clicked! ")

        switch (characterType) {
            case "modified":
                await modCharacterAPI.deleteModifiedCharacter(characterId);
                updateUserData()
                break;
        
            default:
                break;
        }
    }

    return (
        <button className="float-right bg-red-500 hover:bg-red-700 text-white font-semibold px-3 rounded-full text-right" onClick={onClick}>
            x
        </button>
    )
}
