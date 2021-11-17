import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/"></Link>
           </li>  
             {/* the link components job is to generate archor tags, the to attribute is the href attribute of the anchor tag it will create   */}
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers"> Customers </Link>
            </li>
       
             <li className="navbar__item active">
                <Link className="navbar__link" to="/"></Link>
           </li>  
             {/* the link components job is to generate archor tags, the to attribute is the href attribute of the anchor tag it will create   */}
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees"> Employees </Link>
            </li> 

            <li className="navbar__item active">
                <Link className="navbar__link" to="/"></Link>
           </li>  
             {/* the link components job is to generate archor tags, the to attribute is the href attribute of the anchor tag it will create   */}
           
            <li className="navbar__item">
                <Link className="navbar__link" to="/tickets"> Tickets </Link>
            </li> 
        </ul>
    )
}
