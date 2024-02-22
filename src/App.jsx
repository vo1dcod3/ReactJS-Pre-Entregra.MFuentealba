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
import CartContexProvider from "./components/context/CartContex"


const App = () => {
  return (

    <CartContexProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart/>} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Banner />
      <Footer />
    </BrowserRouter>
    </CartContexProvider>


  )

}

export default App