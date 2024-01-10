import Header from "./components/Header"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"


const App = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <ItemListContainer greeting={"🐱 En Mantenimiento"} />
      <Banner/>
      <Footer />
    </div>

  )

}

export default App