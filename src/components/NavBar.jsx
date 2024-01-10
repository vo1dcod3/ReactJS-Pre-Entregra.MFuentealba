import CartWidget from "./CartWidget"
import Logo from "./Logo"
import Retira from "./Retira"


const NavBar = () => {

    return (


        <div className="container my-3">
            <div className="row">
                <div className="col-md-2">
                    <Logo/>
                </div>
                <div className="col-md-8 d-flex aling-item-center">

                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Alimentación y Dietética</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Bienestar felino</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Juguetes</a>
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