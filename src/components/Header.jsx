import Logo from "./Logo";
import NavBar from "./NavBar";
import Retira from "./Retira";

const Header = () => {

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-2">
                    <Logo/>
                </div>
                <div className="col-md-10 d-flex aling-item-center">

                    <NavBar/>
                </div>
            </div>
        </div>
        
    )

}

export default Header;