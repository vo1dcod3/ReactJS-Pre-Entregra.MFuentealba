import { useState } from "react"

const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)


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

    const onAdd =() =>{
        if(counter<itemStock){
            setItemStock(itemStock - counter)
            setCounter(1)
        }

    }

    return (

        <>
            <div className="row">
                <div className="col-12-md-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12-md-2">
                    <button type="button" className="btn btn-primary">Agregar</button>
                </div>
            </div>
        

        </>
    )


}

export default ItemCount