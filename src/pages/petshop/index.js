import Header from "../../components/header";
import Product from "../../components/product/card";
import petlovelogo from "../../assets/petlove_logo.webp"
import "./styles.css"



const Petshop = () => {
    return (
        <div>
            <div className="h-100">
                <Header />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-2" id="petshop-infos">
                            <img src={petlovelogo} alt="Logo" className="img-fluid petshop-image" />
                            <b className="nome-vendedor">Petlove</b>
                            <br />
                            <span className="mdi mdi-star"></span>
                            <text>
                                <b >2,8</b>
                            </text>
                            <span className="mdi mdi-cash"></span>
                            <text> <b >$$$</b></text>
                            <span className="mdi mdi-crosshairs-gps"></span>
                            <text> <b >2,9 KM</b></text>
                            <label className="badge badge-primary">
                                Frete Grátis
                            </label>
                        </div>
  <div className="col-10">
                        <h5>Produtos</h5>
                        <br />
                        <div className="row">
                           {[1,2,3,4,5,6,7,8,9].map((p) => <Product />) }

                        </div>


                    </div>




                    </div>
                  


                </div>

            </div>
        </div>)

};

export default Petshop;