import React from 'react'
import Hero from '../components/Hero/Hero'
import SearchBlurb from '../components/SearchBlurb/SearchBlurb'
// import Navbar from '../components/Navbar/Navbar'

function Home(){
    return(
        <div className = "bg-gray-50 font-sans h-screen">
            {/* <Navbar /> */}
            <Hero />
            <SearchBlurb />
        </div>
    )
}

export default Home;