import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './router';

function RouteAppPage() {
    return (
        <Fragment>
            {routes.app.map((route, index) => (
                <Route key={index} exact={route.exact} path={route.path} component={route.component} />
            ))}
        </Fragment>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <RouteAppPage/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))