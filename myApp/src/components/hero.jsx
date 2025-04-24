import image from "../assets/Illustration.png"
const Hero = ()=>{
    return(
        <div className="hero">
            <HeroSec1 />
            <HeroSec2 />
        </div>
    )
}

const HeroSec1 = ()=>{
    return(
        <div className="text">
            <h1>Lessons and insoghts <br /> <span>from 8 years</span></h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button>Register</button>
        </div>
    )
}

const HeroSec2 = ()=>{
    return(
        <div className="image">
            <img src={image} alt="" />
        </div>
    )
}
export default Hero