import Illustration from '../../assets/illustration.png'
import Header from '../../components/header';
import './styles.css'
import { useState } from 'react'

const Cadastro = () => {
    const [custumer, setCustumer] = useState({
        "phones": {
            "home_phone": {
              "country_code": "",
              "area_code": "",
              "number": ""
            },
            "mobile_phone": {
              "country_code": "",
              "area_code": "",
              "number": ""
            }
          },
        "external_id": new Date().getTime().toString(),
        "name": "",
        "type": "individual",
        "country": "br",
        "email": "",
        "document": ""
    });
    const goToCheckout = () => {
        console.log(custumer)
    }

    const handleInputChange = (e, field) => {
        setCustumer({ ...custumer, [field]: e.target.value });
    }

    const handlePhoneChange = (e, phoneType, field) => {
        setCustumer({
            ...custumer,
            phones: {
                ...custumer.phones,
                [phoneType]: {
                    ...custumer.phones[phoneType],
                    [field]: e.target.value
                }
            }
        });
    }

    return (
        <div className="container-fluid h-100 background">
            <Header whiteVersion hideCart />
            <div className='row'>
                <div className="col-6 text-right my-auto">
                    <img src={Illustration} alt="Logo Petshop" className='img-fluid' />
                </div>
                <div className="col-6">
                    <div className="box col-8" >
                        <h2 className='text-center'>Falta pouco pra fazer o seu pet feliz.</h2>
                        <br />
                        <br />
                        <div className="form-group">
                            <label>Nome completo</label>
                            <input type="text" 
                            onChange={(e) => handleInputChange(e, 'name')}
                            className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" 
                            onChange={(e) => handleInputChange(e, 'email')}
                            className="form-control" />
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Telefone residencial</label>
                                    <input type="text" 
                                    placeholder="Código do país"
                                    onChange={(e) => handlePhoneChange(e, 'home_phone', 'country_code')}
                                    className="form-control mb-2" />

                                    <input type="text" 
                                    placeholder="Código de área"
                                    onChange={(e) => handlePhoneChange(e, 'home_phone', 'area_code')}
                                    className="form-control mb-2" />

                                    <input type="text" 
                                    placeholder="Número"
                                    onChange={(e) => handlePhoneChange(e, 'home_phone', 'number')}
                                    className="form-control" />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label>Telefone móvel</label>
                                    <input type="text" 
                                    placeholder="Código do país"
                                    onChange={(e) => handlePhoneChange(e, 'mobile_phone', 'country_code')}
                                    className="form-control mb-2" />

                                    <input type="text" 
                                    placeholder="Código de área"
                                    onChange={(e) => handlePhoneChange(e, 'mobile_phone', 'area_code')}
                                    className="form-control mb-2" />

                                    <input type="text" 
                                    placeholder="Número"
                                    onChange={(e) => handlePhoneChange(e, 'mobile_phone', 'number')}
                                    className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>CPF</label>
                            <input type="text" 
                            onChange={(e) => handleInputChange(e, 'document')}
                            className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Data de nascimento</label>
                            <input type="date" 
                            className="form-control" />
                        </div>

                        <div className="form-group">
                            <button onClick={goToCheckout} className='btn btn-lg btn-block custom-button'>
                                Finalizar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro
