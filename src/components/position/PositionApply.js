import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { startLogin } from 'Actions/auth';

export class PositionApply extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogin = () => {
        this.props.startLogin(`/apply/${this.props.positionId}`);
    }

    render() {
        return (
            <div className="position_apply">
                {this.props.isAuthenticated &&
                    <div className="position_apply_content__apply">
                        <Link
                            className="nav_link"
                            to={`/apply/${this.props.positionId}`}
                        >
                            Apply Now
                        </Link>
                    </div>
                }
                {!this.props.isAuthenticated &&
                    <div className="position_apply_content__login">
                        <button
                            className="button"
                            onClick={this.handleLogin}
                        >
                            Login with Google
                        </button>
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
    startLogin: (redirectUrl) => dispatch(startLogin(redirectUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionApply);

PositionApply.propTypes = {
    isAuthenticated: PropTypes.bool,
    positionId: PropTypes.string.isRequired,
    startLogin: PropTypes.func.isRequired,
};
