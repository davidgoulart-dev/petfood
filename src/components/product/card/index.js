import './styles.css'
const Product = () => {
    return (
        <div className="product col-3">
            <img src="https://petiser.com.br/wp-content/uploads/2022/06/pimpo-racao-1.jpg" alt="Bebedouro Petlove Pet 1,5L" className="img-fluid align-center" />
            <button className="btn btn primary rounded-circle">+</button>
            <h4>
                <label className="badge badge-primary">R$ 90,00</label>
            </h4>
            <small>
                <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
            </small>

        </div>

    )
}

export default Product