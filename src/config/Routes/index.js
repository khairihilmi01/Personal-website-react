import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Portfolio from '../../pages/Portfolio'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
