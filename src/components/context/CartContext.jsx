import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{

    const[cart, setCart] = useState([]);

    const addItem = (item,quantity) =>{
        if(isInCart(item.id)){
            let pos = cart.findIndex(product => product.id ===id)
            cart[pos].quantity += quantity;
            setCart([...cart]);

        }else{
            setCart([...cart, {...item, quantity:quantity}])
        }

    }
    const removeItem = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                // Si la cantidad es mayor a 1, disminuir en uno la cantidad
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                // Si la cantidad es 1, mantener el producto en el carrito
                // pero con cantidad 0
                return { ...item, quantity: 0 };
            }
            return item;
        });
        setCart(updatedCart);
    };
    

    const clear =()=>{
        setCart([]);
    }

    const isInCart = (id) =>{
        return cart.some(product => product.id === id)
    }

    const CantTotalProductos =() =>{
        return cart.reduce((acum, product) => acum += product.quantity, 0)
    }

    const SumaTotalProductos =() =>{
        return cart.reduce((acum, product) => acum += product.quantity * product.price,0 )
    }

    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clear,CantTotalProductos,SumaTotalProductos}}>
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider