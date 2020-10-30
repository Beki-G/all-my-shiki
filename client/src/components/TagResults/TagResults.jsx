import React, { useState, useEffect } from "react"

function TagResults({ tagId }){
    const [charactersWithTag, setCharactersWithTag] = useState([])
    

    return (
        <div className="bg-pink-200 rounded text-center w-3/4 m-0 mx-auto mt-10">
            <div>Here's the tagId: {tagId.id} </div>
        </div>
    )
}

export default TagResults;