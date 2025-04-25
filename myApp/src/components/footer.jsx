import logo from "../assets/Logo(WHITE).png"
import image1 from "../assets/Social Icons.png"
import image2 from "../assets/twitter.png"
import image3 from "../assets/youtube.png"
import image4 from "../assets/insta.png"
import sendIcon from "../assets/send.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerSec1">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                </div>
                <div className="socialIcons">
                    <a href="#">
                        <img src= {image1} alt="" />
                    </a>
                    
                    <a href="#">
                        <img src= {image2} alt="" />
                    </a>
                    
                    <a href="#">
                        <img src= {image3} alt="" />
                    </a>
                    
                    <a href="#">
                        <img src= {image4} alt="" />
                    </a>
                </div>
            </div>
            <div className="footerSec2">
                <div className="comapany">
                    <h1>Company</h1>
                    <a href="">About us </a>
                    <a href="">Blog</a>
                    <a href="">Contact us </a>
                    <a href="">Pricing</a>
                    <a href="">testmonials</a>
                </div>
                <div className="support">
                    <h1>Support</h1>
                    <a href="">Help Center</a>
                    <a href="">Terms of services</a>
                    <a href="">Legal</a>
                    <a href="">Legal</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Status</a>
                </div>
                <div className="input">
                    <h1>Stay up to date</h1>
                    <input type="email" name="" id="" placeholder="Your email address" />
                    <img src= {sendIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer