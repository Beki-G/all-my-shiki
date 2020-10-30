import React, { useState }from 'react'
import Hero from '../components/Hero/Hero'
import SearchBlurb from '../components/SearchBlurb/SearchBlurb'
import TagResults from "../components/TagResults/TagResults"
// import Navbar from '../components/Navbar/Navbar'

function Home(){
    const [isTag, setIsTag] = useState(false);    
  const [tagId, setTagId] = useState({ id: 0 });


    return(
        <div className = "bg-gray-50 font-sans h-screen">
            {/* <Navbar /> */}
            <Hero />
            <SearchBlurb setIsTag={setIsTag} setTagId={setTagId} />
            {isTag? <TagResults tagId={tagId}/>: <div></div>}
        </div>
    )
}

export default Home;