import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    return(
        <div className="Header">
            <p className="HeaderTitle">Sistema para la prevención del lavado de dinero en instituciones financieras</p>
            <NavLink exact to="/logout" className="navlink">Logout</NavLink>
        </div>
    )
}

export default Header