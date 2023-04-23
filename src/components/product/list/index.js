import './styles.css';
const Product = () => {
    return (
        <div className="col-12 product-list">
            <div className="row">
                <div className="col-3">
                    <img src="https://m.media-amazon.com/images/I/517DTupFR3L._AC_SX466_.jpg" alt="Product" className="img-fluid" />

                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">
                            R$ 30,00
                        </label>
                    </h6>
                    <small>
                        <b>Ração Pedigree Para Cães Adultos Raças Pequenas 1 kg</b>
                    </small>

                </div>
                <div className="col-3">
                    <button className="btn btn-primary rounded-circle btn-produto">-</button>
                </div>

            </div>

        </div>
    )
}

export default Product