import React from 'react'
import { NavLink } from 'react-router-dom'
import AlertIcon from '../assets/img/alert.png'
import './Modules.css'

const AlertModule = () => {
    return(
        <div className="alert-module module">
            <NavLink exact activeClassName="active" to="/alerts" className="navlink">
                <img src={AlertIcon} alt="alert-img" />
                <p>Alertas</p>
            </NavLink>
        </div>
    )
}

export default AlertModule