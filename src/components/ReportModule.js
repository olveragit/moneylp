import React from 'react'
import { NavLink } from 'react-router-dom'
import ReportIcon from '../assets/img/report.png'
import './Modules.css'

const ReportModule = () => {
    return(
        <div className="report-module module">
            <NavLink exact activeClassName="active" to="/reports" className="navlink">
                <img src={ReportIcon} alt="report-img" />
                <p>Reportes</p>
            </NavLink>
        </div>
    )
}

export default ReportModule