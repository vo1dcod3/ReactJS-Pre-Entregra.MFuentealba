
import { Link } from "react-router-dom";
import LogoTienda from "../assets/png-icon-of-a-drawn-cartoon-cat.png"


const Logo = () => {

    return (

        <Link to={"/"}>
            <img src={LogoTienda} alt="" style={{ borderRadius: '10px' }} />
        </Link>


    )

}

export default Logo;