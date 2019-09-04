import React from 'react'
import './Navibar.css'
import ModulesContainer from './ModulesContainer'
import AlertModule from './AlertModule'
import QueryModule from './QueryModule'
import ImportModule from './ImportModule'
import ReportModule from './ReportModule'
import AdminModule from './AdminModule'

const Navibar = () => {
    return(
        <div className="NavibarContainer">
            <ModulesContainer>
                <AlertModule />
                <QueryModule />
                <ImportModule />
                <ReportModule />
                <AdminModule />
            </ModulesContainer>
        </div>
    )
}

export default Navibar