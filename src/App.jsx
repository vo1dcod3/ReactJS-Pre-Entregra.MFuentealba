import Header from "./components/Header"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import Cart from "./components/Cart"
import CartContextProvider from "./components/context/CartContext"
import Checkout from "./components/Checkout"


const App = () => {
  return (

    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart/>} />
        <Route path={"/checkout"} element={<Checkout/>} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Banner />
      <Footer />
    </BrowserRouter>
    </CartContextProvider>


  )

}

export default App