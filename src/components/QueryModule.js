import React from 'react'
import { NavLink } from 'react-router-dom'
import QueryIcon from '../assets/img/query.png'
import './Modules.css'

const QueryModule = () => {
    return(
        <div className="query-module module">
            <NavLink exact activeClassName="active" to="/queries" className="navlink">
                <img src={QueryIcon} alt="query-img" />
                <p>Consultas</p>
            </NavLink>
        </div>
    )
}

export default QueryModule