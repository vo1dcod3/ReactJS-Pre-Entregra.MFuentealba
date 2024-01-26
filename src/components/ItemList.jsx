import { useState } from "react"
import Item from "./Item"

const ItemList = ({ items }) => {

    const [productos, setProductos] = useState(items)
    return (


        <div className="container my-5">
            <div className="row">
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>

    )
}

export default ItemList