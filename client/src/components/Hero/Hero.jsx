import React from "react";
import Navbar from "../Navbar/Navbar"
import "./styles.css"
// import HeroImg from "../../assets/heroImg.png"

function Hero(){
    return (
        <div className="hero-image w-full block">
            
            {/* <img src={HeroImg} alt=""/> */}
            <Navbar />
        </div>
    )
}

export default Hero;