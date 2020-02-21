import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './router';

export function RouteWebviewPage() {
    return (
        <Fragment>
            {routes.webview.map((route, index) => (
                <Route key={index} exact={route.exact} path={route.path} component={route.component} />
            ))}
        </Fragment>
    )
};

class AppWebview extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <RouteWebviewPage />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<AppWebview />, document.getElementById('webview'))