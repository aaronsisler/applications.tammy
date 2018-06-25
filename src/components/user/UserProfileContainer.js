import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserNameWidget from './UserNameWidget';
import UserAddressWidget from './UserAddressWidget';
import UserContactInfoWidget from './UserContactInfoWidget';
import { startEditUser } from '../../actions/user';
import LoadingPage from '../core/LoadingPage';

export class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (user) => {
        this.props.startEditUser(user);
    }
    render() {
        return (
            <div>
                {!this.props.user && <LoadingPage />}
                {this.props.user &&
                    <div id="user_profile_container">
                        <div className="user_widget">
                            <UserNameWidget
                                isReadOnly={this.props.isReadOnly}
                                user={this.props.user}
                                onSubmit={this.onSubmit}
                            />
                        </div>
                        <div className="user_widget">
                            <UserContactInfoWidget
                                isReadOnly={this.props.isReadOnly}
                                user={this.props.user}
                                onSubmit={this.onSubmit}
                            />
                        </div>
                        <div className="user_widget">
                            <UserAddressWidget
                                isReadOnly={this.props.isReadOnly}
                                user={this.props.user}
                                onSubmit={this.onSubmit}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
    startEditUser: (user) => dispatch(startEditUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);

UserProfileContainer.propTypes = {
    isReadOnly: PropTypes.bool,
    user: PropTypes.object,
    startEditUser: PropTypes.func.isRequired,
};
