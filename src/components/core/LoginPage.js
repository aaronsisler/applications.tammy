import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startLogin } from 'Actions/auth';

export const LoginPage = (props) => (
    <div id="login_page">
        <div className="login_content">
            <button
                className="button"
                onClick={props.startLogin}
            >
                Login with Google
            </button>
        </div>
    </div>
);

LoginPage.propTypes = {
    startLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
