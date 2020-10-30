import React, { useState, useEffect } from "react";
import tagsAPI from "../../utils/tagsAPI";
import Options from "../DropdownOptions/DropdownOptions";

function SearchBlurb() {
  const [tags, setTags] = useState([]);
  const [tagId, setTagId] = useState({id:""});

  useEffect(() => {
    getTagNames();
  }, []);

  //gets an array of objects of tag names and ids
  async function getTagNames() {
    const tagNames = await tagsAPI.getAllTagNames();
    // console.log("tagNames in Search Blurb is: ", tagNames);
    setTags(tagNames);
  }

//on change sets TagID to target value
  function onSelectChange(e){
    //   e.preventDefault();
    //   console.log("Option ID is: ", e.target.value)
      setTagId({id:e.target.value})
  }

  return (
    <div className="flex flex-col w-3/4 m-0 mx-auto mt-10">
      <p className="bg-pink-200 rounded text-center">
        How to Search Blurb to go here soon. But first want to work on dynamic
        dropdown.
        <select onChange={onSelectChange} >{tags.map((tag) =>{ return <Options  tag={tag} key={tag._id}/>})}</select>
      </p>
    </div>
  );
}

export default SearchBlurb;
