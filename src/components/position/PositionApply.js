import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { startLogin } from '../../actions/auth';

export class PositionApply extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="position_apply">
                {this.props.isAuthenticated &&
                    <div className="position_apply_content__apply">
                        <Link className="nav_link" to="position_apply">Apply Now</Link>
                    </div>
                }
                {!this.props.isAuthenticated &&
                    <div className="position_apply_content__login">
                        <button
                            className="button"
                            onClick={this.props.startLogin}
                        >
                            Login with Google
                        </button>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user
});

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin('position_apply'))
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionApply);

PositionApply.propTypes = {
    isAuthenticated: PropTypes.bool,
    startLogin: PropTypes.func.isRequired,
};

