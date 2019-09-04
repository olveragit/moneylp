import React from 'react'

export const LoginContext = React.createContext();

export const initialStateLogin = {
    user: '',
    granted: false,
    message: ''
};

function reducer(state, action){
    switch(action.type){
        case 'GRANTED':
            return {
                user: action.user,
                granted: true,
                message: ''
            };
        case 'REJECTED':
            return {
                user: state.user,
                granted: state.granted,
                message: '* Nombre de usuario o contraseña incorrecta'
            };
        case 'LOGGED_OUT':
            return {
                user: '',
                granted: false,
                message: '* Sesión cerrada exitosamente, salga del navegador'
            };
        default:
            return state;
    }
}

export function LoginContextProvider(props){
    const[state, dispatch] = React.useReducer(reducer, initialStateLogin)
    const value = {state, dispatch}
    return (
        <LoginContext.Provider value={value}>
            {props.children}
        </LoginContext.Provider>
    )
}