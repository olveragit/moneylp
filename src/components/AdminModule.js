import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminIcon from '../assets/img/admin.png'
import './Modules.css'

const AdminModule = () => {
    return(
        <div className="admin-module module">
            <NavLink exact activeClassName="active" to="/adminZ" className="navlink">
                <img src={AdminIcon} alt="report-img" />
                <p>Admin</p>
            </NavLink>
        </div>
    )
}

export default AdminModule