import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({ stock, onAdd }) => {

    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const [itemAdded, setItemAdded] = useState(false)


    const incrementar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter)
            setCounter(1)
            onAdd(counter)
            setItemAdded(true)
        }

    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (

        <>
            <div className="row">
                <div className="col-12-md-3 p-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12-md-3 p-2">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-warning">Terminar Mi Compra</Link> : <button type="button" className="btn btn-warning" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>


        </>
    )


}

export default ItemCount