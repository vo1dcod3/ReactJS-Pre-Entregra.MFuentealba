import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Logo from "./Logo"
import Retira from "./Retira"


const NavBar = () => {

    return (


        <div className="container my-3">
            <div className="row">
                <div className="col-md-2">
                    <Logo />
                </div>
                <div className="col-md-8 d-flex aling-item-center">

                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active"  to={"/"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active"  to={"/category/Alimentos"}>Alimentación y Dietética</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active"  to={"/category/Higiene"}>Bienestar Felino</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname="active"  to={"/category/Juguetes"}>Juguetes y Accesorios</NavLink>
                        </li>
                    </ul>
                </div>


                <div className="col-md-1 p-4 d-flex aling-item-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>








    )
}

export default NavBar