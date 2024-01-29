import Header from "./components/Header"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"


const App = () => {
  return (


    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />

      </Routes>
      <Banner />
      <Footer />

    </BrowserRouter>


  )

}

export default App