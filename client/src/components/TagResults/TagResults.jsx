import React from "react"
import TagResultsLink from '../TagResultsLink/TagResultsLink';


function TagResults({ tagId, charactersWithTag, setCharacterProfile, setIsCharacter}){

    return (
        <div className=" bg-middle-red rounded text-center w-3/4 m-0 mx-auto mt-4 pb-4 mb-4">
            <p className="text-white font-semibold text-lg pt-4">All these characters have {tagId.name}</p>
            <br />
            <div> 
                {charactersWithTag.map((characters) => <TagResultsLink name={characters.name} id={characters._id} key={characters._id} setCharacterProfile={setCharacterProfile} setIsCharacter={setIsCharacter} /> )}
            </div>
        </div>
    )
}

export default TagResults;