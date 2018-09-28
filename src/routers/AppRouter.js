import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from 'Core/Navbar';
import Footer from 'Core/Footer';

import DashboardPage from 'Core/DashboardPage';
import LoginPage from 'Core/LoginPage';
import LoggedOutPage from 'Core/LoggedOutPage';
import NotFoundPage from 'Core/NotFoundPage';
import PositionsPage from 'Position/PositionsPage';
import UserProfilePage from 'User/UserProfilePage';
import UserDocumentsPage from 'User/UserDocumentsPage';

import history from 'Tools/history';

export const AppRouter = (props) => (
    <Router history={history}>
        <div>
            <Navbar isAuthenticated={props.isAuthenticated} />
            <Switch>
                <Route path='/' component={PositionsPage} exact={true} />
                <Route path='/dashboard' component={DashboardPage} exact={true} />
                <Route path='/login' component={LoginPage} exact={true} />
                <Route path='/logged_out' component={LoggedOutPage} exact={true} />
                <Route path='/user_profile' component={UserProfilePage} exact={true} />
                <Route path='/user_documents' component={UserDocumentsPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(AppRouter);

AppRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};
