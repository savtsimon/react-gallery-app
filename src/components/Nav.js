import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats' >Cats</NavLink></li>
                <li><NavLink to='/rabbits' >Rabbits</NavLink></li>
                <li><NavLink to='/sloths'>Sloths</NavLink></li>
                <li><NavLink to='/porcupines'>Porcupines</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav