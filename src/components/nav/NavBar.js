import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/"></Link>    
           </li>  
           {/* /on line 9 represents the first page that will be rendered */}
             {/* the link components job is to generate archor tags, the to attribute is the href attribute of the anchor tag it will create   */}
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers"> Customers </Link>
            </li>
       
            
             {/* the link components job is to generate archor tags, the to attribute is the href attribute of the anchor tag it will create   */}
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees"> Employees </Link>
            </li> 

              
             {/* the link components job is to generate archor tags, the to attribute is the href attribute of the anchor tag it will create   */}
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/tickets"> Tickets </Link>
            </li> 

             <li className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick = {
                    () => {
                        localStorage.removeItem("honey_customer")
                    }
                }>
                Log Out 
                </Link>
            </li> 
        </ul>
    )
}
