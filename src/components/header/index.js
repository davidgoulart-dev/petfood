import Logo from '../../assets/logo-white.png'
import Logogreen from '../../assets/logo-green.png'
import './styles.css'

const Header = ({whiteVersion}) => {
    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }
    return (
        <div className="col-12">
        <header className="py-4 px-4 text-center">
            <img src={whiteVersion ? Logo : Logogreen} className="img-fluid"/>
        </header>
        <button className='cart-button' onClick={() => openDrawer}> <span className="mdi mdi-cart "> 2 ítens</span></button>
       
    </div>
    )
}

export default Header;