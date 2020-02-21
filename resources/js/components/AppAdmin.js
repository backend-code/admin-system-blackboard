import React, { Component, Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes, publicAdminRoutes } from './router';
import HeaderAdmin from './admin/components/HeaderAdmin';
import DrawerLabel from './admin/components/DrawerLabel';

export function RouteAdminPage() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
                <HeaderAdmin onClick={handleDrawerOpen} open={open} />
                <DrawerLabel onClick={handleDrawerClose} open={open} />
            
                {routes.admin.map((route, index) => (
                    <Route key={index} exact={route.exact} path={route.path} component={route.component} />
                ))}
           
        </Fragment>
    )
}

export function RoutePublicAdminPage() {
    return (
        <Fragment>
            {publicAdminRoutes.map((route, index) => (
                <Route key={index} exact={route.exact} path={route.path} component={route.component} />
            ))}
        </Fragment>
    )
}

export function AdminPage() {
    const [auth, setAuth] = useState(true);
    return (
        <Fragment>
            {auth !== true ? (
                <Fragment>
                    <RoutePublicAdminPage />
                </Fragment>
            ) : (
                    <Fragment>
                        <RouteAdminPage />
                    </Fragment>
                )}
        </Fragment>
    )
}

class AppAdmin extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <AdminPage />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<AppAdmin />, document.getElementById('admin'))