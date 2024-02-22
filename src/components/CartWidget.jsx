import { useContext } from "react"
import IconCart from "../assets/cart.svg"
import { Link } from "react-router-dom"
import { CartContex } from "./context/CartContex"

const CartWidget = () => {
    const { CantTotalProductos } = useContext(CartContex );

    return (
         CantTotalProductos()> 0 ? <Link to={"/cart"} className="btn btn-info position-relative">
                <img src={IconCart} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
            </Link> : ""

    )

}

export default CartWidget