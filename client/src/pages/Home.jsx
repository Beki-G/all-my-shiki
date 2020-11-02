import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import SearchBlurb from "../components/SearchBlurb/SearchBlurb";
import TagResults from "../components/TagResults/TagResults";
import HomeCharacterProfile from "../components/HomeCharacterProfile/HomeCharacterProfile";
// import Navbar from '../components/Navbar/Navbar'

function Home() {
  const [isTag, setIsTag] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [tagId, setTagId] = useState({ id: 0 });
  const [charactersWithTag, setCharactersWithTag] = useState([]);
  const [characterProfile, setCharacterProfile] = useState({});

  return (
    <div className="bg-gray-50 font-sans h-screen">
      {/* <Navbar /> */}
      <Hero />
      <SearchBlurb
        setIsTag={setIsTag}
        setTagId={setTagId}
        setCharactersWithTag={setCharactersWithTag}
        setIsCharacter={setIsCharacter}
      />
      {isTag && (
        <TagResults
          tagId={tagId}
          charactersWithTag={charactersWithTag}
          setCharacterProfile={setCharacterProfile}
          setIsCharacter={setIsCharacter}
        />
      )}
      {isCharacter && (
        <HomeCharacterProfile characterProfile={characterProfile} />
      )}
    </div>
  );
}

export default Home;
