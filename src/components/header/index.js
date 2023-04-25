import Logo from '../../assets/logo-white.png'
import Logogreen from '../../assets/logo-green.png'
import './styles.css'
import Sidebar from '../sidebar'
import React, {  useState } from "react";

const Header = ({whiteVersion}) => {
   
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <div className="col-12">
        <header className="py-4 px-4 text-center">
            <img src={whiteVersion ? Logo : Logogreen} className="img-fluid"/>
        </header>
        <button className='cart-button' onClick={showSidebar}> <span className="mdi mdi-cart "> 2 ítens</span></button>
       {sidebar ? <Sidebar/> : null}
    </div>
    )
}

export default Header;