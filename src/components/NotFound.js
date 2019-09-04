import React from 'react'
import './NotFound.css'
import { LoginContext } from './LoginContext'

const NotFound = (props) => {
    const {state} = React.useContext(LoginContext)
    console.log(state)

    if(state.granted){
        return(
            <div className="not-found">
                <div>
                    <p>ERROR 404 - Página no encontrada !!</p><br />
                    <button onClick={() => props.history.goBack()} className="point-left">
                        <span role="img" aria-label="pointer-left">👈</span>
                    </button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="not-found">
                <div>
                    <p>You are not logged in</p>
                    <button onClick={()=> props.history.push('/')} className="point-left">
                        <span role="img" aria-label="pointer-left">👈</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default NotFound