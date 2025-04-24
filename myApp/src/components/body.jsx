import logo1 from "../assets/Logo (1).png"
import logo2 from "../assets/Logo (2).png"
import logo3 from "../assets/Logo (3).png"
import logo4 from "../assets/Logo (4).png"
import logo5 from "../assets/Logo (5).png"
import logo6 from "../assets/Logo (6).png"
import logo7 from "../assets/Logo (7).png"
import icon1 from "../assets/Icon (1).png"
import icon2 from "../assets/Icon (2).png"
import icon3 from "../assets/Icon (3).png"

const Body = () => {
    return (
        <div className="body-section">
            <Heading />
            <Icons />
            <Heading2 />
            <Cards />
        </div>
    )
}

const Heading = () => {
    return (
        <div className="heading">
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
        </div>
    )
}

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

const Heading2 = () => {
    return (
        <div className="heading">
            <h1>Manage your entire community <br /> in a single system</h1>
            <p>Who is Nexcent suitable for?</p>
        </div>
    )
}

const Cards = () => {
    return (
        <div className="cards">
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
    )
}

const Card1 = () => {
    return (
        <div className="card">
            <img src={icon1} alt="" />
            <h1>Membership <br /> Organisations</h1>
            <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>
    )
}
const Card2 = () => {
    return (
        <div className="card">
            <img src={icon2} alt="" />
            <h1>National <br /> Associations</h1>
            <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>
    )
}
const Card3 = () => {
    return (
        <div className="card">
            <img src={icon3} alt="" />
            <h1>Clubs And <br /> Groups</h1>
            <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
        </div>
    )
}

export default Body