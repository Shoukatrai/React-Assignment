import image9 from "../assets/image 9.png"
import Icons from "./icons"
import right from "../assets/Right.png"
const Customer = () => {
    return (
        <div className="design-cmp" id="customer">
            <div>
                <img src={image9} alt="" />
            </div>
            <div>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h1>Tim Smith</h1>
                <p>British Dragon Boat Racing Association</p>
                <div className="cust-logos">
                    <Icons />
                    <a href="#">Meet all customers <img src= {right} alt="" /></a>                   
                </div>
            </div>
        </div>
    )
}


export default Customer