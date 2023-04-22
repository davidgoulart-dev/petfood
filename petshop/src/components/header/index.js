import Logo from '../../assets/logo-white.png'
import Logogreen from '../../assets/logo-green.png'

const Header = ({whiteVersion}) => {
    return (
        <div className="col-12">
        <header className="py-4 px-4 text-center">
            <img src={whiteVersion ? Logo : Logogreen} className="img-fluid"/>
        </header>
    </div>
    )
}

export default Header;