import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserNameWidget from './UserNameWidget';
import UserAddressWidget from './UserAddressWidget';
import { startEditUser } from '../../actions/user';

export class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(user) {
        this.props.startEditUser(user);
    }
    render() {
        return (
            <div id="user_profile_container">
                <UserNameWidget
                    user={this.props.user}
                    onSubmit={this.onSubmit}
                />
                <UserAddressWidget
                    user={this.props.user}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    startEditUser: (user) => dispatch(startEditUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);

UserProfileContainer.propTypes = {
    user: PropTypes.object.isRequired,
    startEditUser: PropTypes.func.isRequired,
};
