import React from "react"

function Options({tag}){
    return (
        <option className="font-sans" value={tag._id} name={tag.tag}>
            {tag.tag}
        </option>
    )   
}

export default Options;