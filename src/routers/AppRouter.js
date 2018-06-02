import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PositionsPage from '../components/position/PositionsPage';
import LoginPage from '../components/core/LoginPage';
import LoggedOutPage from '../components/core/LoggedOutPage';
import DashboardPage from '../components/core/DashboardPage';
import UserAccountPage from '../components/user/UserAccountPage';
import NotFoundPage from '../components/core/NotFoundPage';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={PositionsPage} exact={true} />
            <PublicRoute path="/login" component={LoginPage} exact={true} />
            <PublicRoute path="/logged_out" component={LoggedOutPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
            <PrivateRoute path="/user_account" component={UserAccountPage} exact={true} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;
