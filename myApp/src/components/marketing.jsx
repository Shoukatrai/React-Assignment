import right from "../assets/Right.png"
const Marketing = () => {
    return (
        <div >
            <div id="heading">
                <h1>Caring is the new marketing</h1>
                <p>The Nexcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community,  read about how our community <br /> are increasing their membership income and lot's more.​</p>
            </div>

            <div className="marketCards">
                <div className="marketCard">
                    <p>Creating Streamlined <br /> Safeguarding Processes with <br /> OneRen</p>
                    <button>Read More <img src= {right} alt="" /> </button>
                </div>
                <div className="marketCard">
                    <p>What are your safeguarding <br /> responsibilities and how can <br /> you manage them?</p>
                    <button>Read More <img src= {right} alt="" />  </button>
                </div>
                <div className="marketCard">
                    <p>Revamping the Membership <br /> Model with Triathlon <br /> Australia</p>
                    <button>Read More <img src= {right} alt="" />  </button>
                </div>
            </div>
        </div>
    )
}

export default Marketing