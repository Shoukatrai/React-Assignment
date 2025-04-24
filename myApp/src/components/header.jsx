import logo from "../assets/Logo.png"

const Header = () => {
    return (
        <div className='header'>
            <HeaderLogo />
            <HeaderLinks />
            <AuthBtns />
            <ShowMenu />
        </div>
    )
}


const HeaderLogo = () => {
    return (
        <div className="logoName">
            <img src={logo} alt="logo icon" />
        </div>
    )
}


const HeaderLinks = () => {
    return (
        <ul className="header-links">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
        </ul>
    )
}

const AuthBtns = () => {
    return (
        <div className="authBtns">
            <Btn1 />
            <Btn2 />
        </div>
    )
}


const Btn1 = () => {
    return (
        <button id="btn1">Login</button>
    )
}
const Btn2 = () => {
    return (
        <button id="btn2">Sign up</button>
    )
}

const ShowMenu = () => {
    return (
        <div className="show-menu">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Header