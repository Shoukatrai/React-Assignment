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
import art from "../assets/Frame 35.png"
import Icons from "./icons"



const Body = () => {
    return (
        <div className="body-section">
            <Heading />
            <Icons />
            <Heading2 />
            <Cards />
            <Experience />

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
            <h1>Membership  Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
    )
}
const Card2 = () => {
    return (
        <div className="card">
            <img src={icon2} alt="" />
            <h1>National  Associations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
    )
}
const Card3 = () => {
    return (
        <div className="card">
            <img src={icon3} alt="" />
            <h1>Clubs And  Groups</h1>
            <p>Our membership management  software provides full automation of  membership renewals and payments</p>
        </div>
    )
}


const Experience = () => {
    return (
        <div className="experience">
            <div className="imageExc">
                <img src={art} alt="" />
            </div>
            <div className="textExc">
                <h1>The unseen of spending three  years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed  porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam  quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

const Groups = () => {
    return (
        <div className="groups">
            <div className="group-text">
                <h1>Helping a local  <span>business reinvent itself</span></h1>
                <p>We reached here with our hardwork and dedication</p>
            </div>
            <div className="group-cards">
                <div className="gorup1">
                    <GroupCard1 />
                    <GroupCard2 />
                </div>
                <div className="gorup2">
                    <GroupCard3 />
                    <GroupCard4 />
                </div>
            </div>
        </div>
    )
}

const GroupCard1 = () => {
    return (
        <div className="groupCard">
            <div>
                <img src={icon4} alt="" />
            </div>
            <div>
                <h1>2,245,341</h1>
                <p>Members</p>
            </div>
        </div>
    )
}
const GroupCard2 = () => {
    return (
        <div className="groupCard">
            <div>
                <img src={icon5} alt="" />
            </div>
            <div>
                <h1>46,328 </h1>
                <p>Clubs</p>
            </div>
        </div>
    )
}
const GroupCard3 = () => {
    return (

        <div className="groupCard">
            <div>
                <img src={icon6} alt="" />
            </div>
            <div>
                <h1>828,867</h1>
                <p>Event Bookings</p>
            </div>
        </div>
    )
}
const GroupCard4 = () => {
    return (

        <div className="groupCard">
            <div>
                <img src={icon7} alt="" />
            </div>
            <div>
                <h1>1,926,436</h1>
                <p>Payments</p>
            </div>
        </div>
    )
}

export default Body 