import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
// import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import Loading from "./Loading";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();



    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
        });
    }, [id]);
    return (
        <>
            {id ? "" : <Carousel />}
            {loading ? <Loading /> : <ItemList items={items} />}

        </>

    )
}

export default ItemListContainer