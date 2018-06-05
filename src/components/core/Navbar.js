import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogout } from '../../actions/auth';

const Navbar = (props) => (
    <div id="navbar">
        {props.isAuthenticated &&
            <div className="navbar_content">
                <div className="navbar_links">
                    <Link className="navbar_link" to="/dashboard">Dashboard</Link>
                    <Link className="navbar_link" to="/user_account">User Account</Link>
                    <Link className="navbar_link" to="/">Positions</Link>
                </div>
                <div className="navbar_logout">
                    <button className="button navbar_link" onClick={props.startLogout}>Logout</button>
                </div>
            </div>
        }
        {!props.isAuthenticated &&
            <div className="navbar_content">
                <div className="navbar_login">
                    <Link className="navbar_link" to="/login">Login</Link>
                </div>
            </div>
        }
    </div>
);

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    startLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Navbar);
