import Logo from "./Logo";
import NavBar from "./NavBar";
import Retira from "./Retira";

const Header = () => {

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1 p-1 ">
                    <Logo />
                </div>

                <div className="col-md-9 d-flex align-items-center">
                    <NavBar />
                </div>

                <div className="col-md-2 d-flex align-items-center">
                    <Retira />
                </div>
            </div>
        </div>
        
    )

}

export default Header;