import './styles.css'
import petlove_logo from '../../assets/petlove_logo.webp'

const Petshop = () => {
    return (
        <li className="petshop d-inline-block">
            <div className="d-flex align-items-start">
                <div className="d-inline-block">
                    <img src={petlove_logo} />
                </div>
                <div id='container' >
                <div className="d-inline-block">
                    <div>
                        <b className="nome-vendedor">Petlove</b>
                    </div>
                    <div className="d-flex align-items-start petshop-infos">
                        <span className="mdi mdi-star"></span>
                        <text className="ml-2">
                            <b>2,8</b>
                        </text>
                        <span className="mdi mdi-cash ml-2"></span>
                        <text className="ml-2"> <b>$$$</b></text>
                        <span className="mdi mdi-crosshairs-gps ml-2"></span>
                        <text className="ml-2"> <b>2,9 KM</b></text>
                    </div>
                    <div>
                        <label className="badge badge-primary">
                            Frete Grátis
                        </label>
                    </div>
                </div>
            </div>
            </div>
        </li>
    );
};
export default Petshop;

