import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogin } from '../../actions/auth';

const LoginPage = (props) => (
    <div className="login_content">
        <h1>Tammy</h1>
        <button className="button" onClick={props.startLogin}>Login with Google</button>
    </div>
);

LoginPage.propTypes = {
    startLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
