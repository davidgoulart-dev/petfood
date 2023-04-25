import { FaTimes } from 'react-icons/fa';
import "./styles.css"

import  Product from "../product/list"
const Sidebar = (  ) => {
    const closeSideBar = () => {
        document.querySelector(".sidebar").style.display = "none"
    }
   return (
        <div
       
        >
            <div className="container-fluid h-100 pt-4 sidebar">
                <h5>Minha Sacola (5)</h5>
                <FaTimes onClick={closeSideBar} className="close-icon" />
                <div className="row products">
                <div className="row products">
                               {[1,2,3,4,5,6,7,8,9].map((p) => ( 
                                 <Product/>
                                 ))}
                            </div>



                </div>



            </div>

        </div>
    )
}

export default Sidebar
