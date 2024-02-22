import { useEffect, useState } from "react"
// import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { getFirestore, getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams();


    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             let producto = arrayProductos.find(item =>item.id ===parseInt(id));

    //             resolve(producto);
    //         }, 1000)
    //     })
    //     promesa.then(data => {
    //         setItem(data)
    //     })

    // },[id])

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setItem({ id: resultado.id, ...resultado.data() });
        });
    }, [id]);

    return (
        <ItemDetail item={item} />
    )

}
export default ItemDetailContainer