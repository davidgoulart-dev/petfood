import Logo from '../../assets/logo-white.png'
import Illustration from '../../assets/illustration.png'


const Cadastro = () => {
    return (
        <div className="container-fluid h-100 bg-primary">
            <div className="col-12">
                <img src={Logo} alt="Logo Petshop" />
            </div>
            <div className='row'>
            <div className="col-6 text-right my-auto">
            <img src={Illustration} alt="Logo Petshop" className='img-fluid' />
            </div>
            <div className="col-6">
                <div className="box col-8" >
                    <h2 className='text-center'>Falta pouco pra fazer o seu pet feliz.</h2>
                    <br />
                    <br />
                    <input type="text" 
                    placeholder="Nome completo"
                     className="form-control form-control-lg mb-3" />

                    <input type="text" 
                    placeholder="E-mail" 
                    className="form-control form-control-lg mb-3" />

                    <input type="text" 
                    placeholder="Telefone"
                     className="form-control form-control-lg mb-3" />

                    <input type="text" 
                    placeholder="CPF"
                     className="form-control form-control-lg mb-3" />

                    <input type="date" 
                    placeholder="Data de nascimento"
                     className="form-control form-control-lg mb-3" />

                     <button className='btn btn-lg btn-block btn-secondary'>
                            Finalizar Pedido
                     </button>
                
                </div>

            </div>
            </div>

        </div>
    );
}

export default Cadastro