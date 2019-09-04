import React from 'react'
import { NavLink } from 'react-router-dom'
import ImportIcon from '../assets/img/import.png'
import './Modules.css'

const ImportModule = () => {
    return(
        <div className="alert-module module">
            <NavLink exact activeClassName="active" to="/imports" className="navlink">
                <img src={ImportIcon} alt="import-img" />
                <p>Importar</p>
            </NavLink>
        </div>
    )
}

export default ImportModule