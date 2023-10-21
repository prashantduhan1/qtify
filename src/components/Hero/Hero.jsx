import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/vibrating-headphone 1.png"
const Hero=()=>{

    return(
        <div className="hero">
                <div className="hero-txt">100 Thousand Songs, ad-free <br></br> Over thousands podcast episodes</div>
                <img src={HeroImage} alt='Hero' className="hero-img"></img>
        </div>
    )
}
export default Hero;