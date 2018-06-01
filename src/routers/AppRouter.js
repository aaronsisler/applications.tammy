import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/core/LoginPage';
import DashboardPage from '../components/core/DashboardPage';
import UserAccountPage from '../components/user/UserAccountPage';
import NotFoundPage from '../components/core/NotFoundPage';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
            <PrivateRoute path="/user_account" component={UserAccountPage} exact={true} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;
