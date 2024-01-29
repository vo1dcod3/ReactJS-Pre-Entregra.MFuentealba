import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import Carousel from "./Carousel";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams()


    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 2000)
        })
        promesa.then(data => {
            setItems(data)
        })
    }, [id])

    return (
        <>
            {id ? "" : <Carousel />}
            <ItemList items={items} />

        </>

    )
}

export default ItemListContainer