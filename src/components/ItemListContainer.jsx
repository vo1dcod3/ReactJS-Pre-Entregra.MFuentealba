import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query} from 'firebase/firestore'
// import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import Carousel from "./Carousel";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();


    // llamada del producto
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
        });
    }, [id]);
    return (
        <>
            {id ? "" : <Carousel />}
            <ItemList items={items} />

        </>

    )
}

export default ItemListContainer