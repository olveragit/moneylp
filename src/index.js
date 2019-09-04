import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import { LoginContextProvider } from './components/LoginContext'

ReactDOM.render(
    <LoginContextProvider>
        <App />
    </LoginContextProvider>,
    document.getElementById('root')
);
