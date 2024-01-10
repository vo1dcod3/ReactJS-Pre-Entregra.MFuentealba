import Producto1 from "../assets/Producto1.jpg";
import Producto2 from "../assets/Producto2.jpg";

const Banner = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <img src={Producto1} className="card-img-top img-fluid" alt="Producto 1" />
            <div className="card-body text-center">
              <h4>Juguetes para gatos</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Producto2} className="card-img-top img-fluid" alt="Producto 2" />
            <div className="card-body text-center">
              <h4>Alimentos para gatos</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;