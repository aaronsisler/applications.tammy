import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from '../components/core/Navbar';
import Footer from '../components/core/Footer';

import ApplicationPage from '../components/shared/application/ApplicationPage';
import DashboardPage from '../components/core/DashboardPage';
import LoginPage from '../components/core/LoginPage';
import LoggedOutPage from '../components/core/LoggedOutPage';
import NotFoundPage from '../components/core/NotFoundPage';
import PositionsPage from '../components/position/PositionsPage';
import UserDocumentsPage from '../components/user/UserDocumentsPage';
import UserProfilePage from '../components/user/UserProfilePage';

import { history } from '../tools/history';

const AppRouter = (props) => (
    <Router history={history}>
        <div>
            <Navbar isAuthenticated={props.isAuthenticated} />
            <Switch>
                <Route path="/" component={PositionsPage} exact={true} />
                <Route path="/apply" component={ApplicationPage} exact={true} />
                <Route path="/dashboard" component={DashboardPage} exact={true} />
                <Route path="/login" component={LoginPage} exact={true} />
                <Route path="/logged_out" component={LoggedOutPage} exact={true} />
                <Route path="/user_documents" component={UserDocumentsPage} exact={true} />
                <Route path="/user_profile" component={UserProfilePage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(AppRouter);

AppRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};
