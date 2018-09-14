import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from 'Core/Navbar';
import Footer from 'Core/Footer';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...props
}) => (
        <Route {...props} component={() => (
            isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
                    <div>
                        <Navbar isAuthenticated={isAuthenticated} />
                        <Component {...props} />
                        <Footer />
                    </div>
                )
        )} />
    );

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
