import React from "react"
import { NavLink } from "react-router-dom"

const Nav = ({ setSearchTerm }) => {
    function handleNav(e) {
        setSearchTerm(e.target.textContent)
    }
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats' onClick={handleNav}>Cats</NavLink></li>
                <li><NavLink to='/rabbits' onClick={handleNav}>Rabbits</NavLink></li>
                <li><NavLink to='/sloths' onClick={handleNav}>Sloths</NavLink></li>
                <li><NavLink to='/porcupines' onClick={handleNav}>Porcupines</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav