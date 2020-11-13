import React, { useState, useEffect } from "react";
import tagsAPI from "../../utils/tagsAPI";
import Options from "../DropdownOptions/DropdownOptions";
import characterAPI from '../../utils/characterAPI'
import { UseUserSession } from "../../utils/UserContext";


function SearchBlurb({ setIsTag, setTagId, setCharactersWithTag, setIsCharacter }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTagNames();
  }, []);

  const { userProfile } = UseUserSession();

  //gets an array of objects of tag names and ids
  async function getTagNames() {
    const tagNames = await tagsAPI.getAllTagNames();
    setTags(tagNames);
  }

  async function getCharactersWithTag(tag) {
    setIsTag(true)

    const characters = await characterAPI.getCharactersWithTag(tag)
    setCharactersWithTag(characters)
}

  //on change sets TagID to target value
  function onSelectChange(e) {
    e.preventDefault();
    //isCharacter conditionally renders Character Profile
    setIsCharacter(false)
    
    const tagName =  e.target.selectedOptions[0].getAttribute("name");
    setTagId({ id: e.target.value, name: tagName} );
    e.target.value === "false" ? setIsTag(false) : getCharactersWithTag(e.target.value );
  }

  return (
    <div className="flex flex-col w-3/4 m-0 mx-auto mt-10 ">
      <div className="text-center">Welcome back {userProfile.userName===""?"NamelessMaster":userProfile.userName}!</div>
      <p className="bg-pink-200 rounded text-center p-2">
        How to Search Blurb to go here soon. But first want to work on dynamic
        dropdown.
        <select onChange={onSelectChange}>
          <option className="font-sans" value={false}>
            ---Choose a trait---
          </option>
          {tags.map((tag) => {
            return <Options tag={tag} key={tag._id} />;
          })}
        </select>
      </p>
    </div>
  );
}

export default SearchBlurb;
