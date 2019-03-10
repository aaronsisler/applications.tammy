import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from 'Core/Navbar';

import ApplicantsPage from 'Applicant/ApplicantsPage';
import ApplicationPage from 'Application/ApplicationPage';
import DashboardPage from 'Core/DashboardPage';
import LoggedOutPage from 'Core/LoggedOutPage';
import LoginPage from 'Core/LoginPage';
import NotFoundPage from 'Core/NotFoundPage';
import PositionsPage from 'Position/PositionsPage';
import PositionsWatchAddPage from 'PositionWatch/PositionsWatchAddPage';
import UserDocumentsPage from 'User/UserDocumentsPage';
import UserProfilePage from 'User/UserProfilePage';

import history from 'Tools/history';

export const AppRouter = (props) => (
    <Router history={history}>
        <div>
            <Navbar isAuthenticated={props.isAuthenticated} />
            <Switch>
                <Route path='/dashboard/:positionId' component={DashboardPage} exact={true} />
                <Route path='/dashboard' component={DashboardPage} exact={true} />
                <Route path="/applicants/:positionId/:applicantId" component={ApplicantsPage} exact={true} />
                <Route path="/applicants/:positionId" component={ApplicantsPage} exact={true} />
                <Route path="/apply/:positionId" component={ApplicationPage} exact={true} />
                <Route path='/logged_out' component={LoggedOutPage} exact={true} />
                <Route path='/login' component={LoginPage} exact={true} />
                <Route path='/position_watch_add/:positionId' component={PositionsWatchAddPage} exact={true} />
                <Route path='/position_watch_add' component={PositionsWatchAddPage} exact={true} />
                <Route path='/user_documents' component={UserDocumentsPage} exact={true} />
                <Route path='/user_profile' component={UserProfilePage} exact={true} />
                <Route path='/positions/:positionId' component={PositionsPage} exact={true} />
                <Route path='/positions' component={PositionsPage} exact={true} />
                <Route path='/not_found' component={NotFoundPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
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
