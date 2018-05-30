import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../components/core/Navbar';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...props
}) => (
        <Route {...props} component={() => (
            isAuthenticated ? (
                <div>
                    <Navbar />
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/" />
                )
        )} />
    );

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
