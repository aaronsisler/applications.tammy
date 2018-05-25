import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogout } from '../../actions/auth';

const Header = (props) => (
    <header>
        <div className="header_content">
            <Link className="header_title" to="/dashboard">
                Dashboard
                </Link>
            <button className="button" onClick={props.startLogout}>Logout</button>
        </div>
    </header>
);

Header.propTypes = {
    startLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
