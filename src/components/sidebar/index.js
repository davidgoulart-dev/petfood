import { useState, useEffect } from "react"
import "./styles.css"

import  Product from "../product/list"
const Sidebar = () => {
   const [opened, setOpened] = useState(false)
   useEffect(() => {
    window.addEventListener('openCart', () => {
        setOpened(true)
    })
   }, [])
   return (
        <div
       
        >
            <div className="container-fluid h-100 pt-4 sidebar">
                <h5>Minha Sacola (5)</h5>
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
