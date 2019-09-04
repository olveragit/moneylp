import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import { LoginContext } from './components/LoginContext'
import './App.css'

import Navibar from './components/Navibar'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

import AlertsWA from './components/AlertsWA'
import QueriesWA from './components/QueriesWA'
import ImportsWA from './components/ImportsWA'
import ReportsWA from './components/ReportsWA'
import AdminWA from './components/AdminWA'
import Logout from './components/Logout'
import NotFound from './components/NotFound'


const App = () => {

  const {state} = React.useContext(LoginContext)
  console.log(state)
  
  return (
    <>
      <Router>
        {
          (state.granted)
          ? // if granted is true
          <div className="spaContainer">
            <div className="left-side">
              <Navibar />
            </div>
            <div className="right-side">
              <Header />
              <Switch>
                <Route exact path="/alerts" component={AlertsWA} />
                <Route exact path="/queries" component={QueriesWA} />
                <Route exact path="/imports" component={ImportsWA} />
                <Route exact path="/reports" component={ReportsWA} />
                <Route exact path="/admin" component={AdminWA} />
                <Route exact path="/logout" component={Logout} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </div>
            <Redirect to="/alerts" />
          </div>
          : // if granted is false
          <>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route component={NotFound} />
          </Switch>
          </>
        }
      </Router>
    </>
  )
}

export default App
