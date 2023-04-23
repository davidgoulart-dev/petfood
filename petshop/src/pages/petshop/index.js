import Header from "../../components/header";
import "./styles.css"



const Petshop = () => {
    return (
        <div>
            <div className="h-100">
                <Header />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-2" id="petshop-infos">
                            <img src="https://www.petlove.com.br/static/uploads/banner_image/image/44490/petlove_logo.png" alt="Logo" className="img-fluid" />
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
                        </div>
                        <label className="badge">
                            Frete Grátis
                        </label>





                    </div>
                    <div className="col-10">


                    </div>

                </div>

            </div>
        </div>)

};

export default Petshop;