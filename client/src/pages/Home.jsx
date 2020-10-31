import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import SearchBlurb from "../components/SearchBlurb/SearchBlurb";
import TagResults from "../components/TagResults/TagResults";
// import Navbar from '../components/Navbar/Navbar'

function Home() {
  const [isTag, setIsTag] = useState(false);
  const [tagId, setTagId] = useState({ id: 0 });
  const [charactersWithTag, setCharactersWithTag] = useState([]);

  return (
    <div className="bg-gray-50 font-sans h-screen">
      {/* <Navbar /> */}
      <Hero />
      <SearchBlurb
        setIsTag={setIsTag}
        setTagId={setTagId}
        setCharactersWithTag={setCharactersWithTag}
      />
      {isTag ? (
        <TagResults tagId={tagId} charactersWithTag={charactersWithTag} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Home;