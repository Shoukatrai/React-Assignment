import logo from "../assets/Logo.png"
const header = document.getElementById("heaDER")
const headerLink = document.getElementById("headerLink")


const toogle = ()=>{
    if(header.className  === 'header'){
        header.className = 'headerOpen'
    }else{
        header.className  = 'header'
    }

    if(headerLink.className  == 'header-links'){
        headerLink.className = 'header-links-open'
    }else{
        headerLink.className  = 'header-links'
    }
}

const Header = () => {
    return (
        <div className='header' id="heaDER">
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
        <ul className="header-links" id = "headerLink">
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
        <div className="show-menu" onClick={toogle}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Header