import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserNameWidget from 'User/UserNameWidget';
import UserContactInfoWidget from 'User/UserContactInfoWidget';
import UserAddressWidget from 'User/UserAddressWidget';
import { startEditUser } from 'Actions/user';
import LoadingPage from 'Core/LoadingPage';

export class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (user) => this.props.startEditUser(user);

    render() {
        return (
            <div>
                {!this.props.user && <LoadingPage />}
                {this.props.user &&
                    <div className="user_profile_container">
                        <UserNameWidget
                            isReadOnly={this.props.isReadOnly}
                            onSubmit={this.onSubmit}
                            user={this.props.user}
                        />
                        <UserContactInfoWidget
                            isReadOnly={this.props.isReadOnly}
                            onSubmit={this.onSubmit}
                            user={this.props.user}
                        />
                        <UserAddressWidget
                            isReadOnly={this.props.isReadOnly}
                            onSubmit={this.onSubmit}
                            user={this.props.user}
                        />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    user: state.user,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startEditUser: (user) => dispatch(startEditUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);

UserProfileContainer.propTypes = {
    isReadOnly: PropTypes.bool,
    startEditUser: PropTypes.func.isRequired,
    user: PropTypes.object,
};
