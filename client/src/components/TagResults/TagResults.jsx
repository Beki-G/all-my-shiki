import React from "react"
import TagResultsLink from '../TagResultsLink/TagResultsLink';


function TagResults({ tagId, charactersWithTag}){

    return (
        <div className="bg-pink-200 rounded text-center w-3/4 m-0 mx-auto mt-10">
            <p>All these characters have {tagId.name}</p>
            <br />
            <div> 
                {charactersWithTag.map((characters) => <TagResultsLink name={characters.name} id={characters._id} key={characters._id}/>)}
            </div>
        </div>
    )
}

export default TagResults;