import { useContext } from "react"
import { CartContex } from "./context/CartContex"
import { Link } from "react-router-dom"
import trash from "../assets/trash.svg"


const Cart = () => {
    const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContex)

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>🐈</p>
                        <div className="alert alert-info" role="alert">NO HAY PRODUCTOS EN EL CARRITO</div>
                        <Link to={"/productos"} className="btn btn-warning my-5">VOLVER A PRODUCTOS</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos Seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={[product.id]}>
                                    <td><img src={product.image} alt={product.name} width={80} /></td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.price}</td>
                                    <td><a href="#" onClick={() => { removeItem(product.id) }}><img src={trash} alt="Eliminar" /></a></td>
                                </tr>
                            )}

                            <tr>
                                <td>Suma Total</td>
                                <td>${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Cart