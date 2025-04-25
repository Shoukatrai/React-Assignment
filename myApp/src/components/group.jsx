import icon4 from "../assets/Icon (4).png"
import icon5 from "../assets/Icon (5).png"
import icon6 from "../assets/Icon (6).png"
import icon7 from "../assets/Icon (7).png"
const Groups = () => {
    return (
        <div className="groups">
            <div className="group-text">
                <h1>Helping a local <br /> <span>business reinvent itself</span></h1>
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

export default Groups