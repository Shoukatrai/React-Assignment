import logo1 from "../assets/Logo (1).png"
import logo2 from "../assets/Logo (2).png"
import logo3 from "../assets/Logo (3).png"
import logo4 from "../assets/Logo (4).png"
import logo5 from "../assets/Logo (5).png"
import logo6 from "../assets/Logo (6).png"
import logo7 from "../assets/Logo (7).png"
const Icons = () => {
    return (
        <marquee behavior="scroll" direction="">
            <div className="icons">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
            </div>
        </marquee>
    )
}

export default Icons