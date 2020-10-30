import React from "react"

function Options({tag}){
    return (
        <option id={tag._id}>
            {tag.tag}
        </option>
    )   
}

export default Options;