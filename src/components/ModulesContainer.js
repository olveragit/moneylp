import React from 'react'
import './Modules.css'

const ModulesContainer = (props) => {
    return(
        <div className="modules-container">
            {props.children}
        </div>
    )
}

export default ModulesContainer