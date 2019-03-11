import React from 'react';
import PropTypes from 'prop-types';
import UserNameWidget from 'User/UserNameWidget';
import UserAddressWidget from 'User/UserAddressWidget';
import UserContactInfoWidget from 'User/UserContactInfoWidget';

export default class ApplicantUserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="applicant_user_info">
                <UserNameWidget
                    isReadOnly={true}
                    user={this.props.user}
                />
                <UserContactInfoWidget
                    isReadOnly={true}
                    user={this.props.user}
                />
                <UserAddressWidget
                    isReadOnly={true}
                    user={this.props.user}
                />
            </div>
        );
    }
}

ApplicantUserInfo.propTypes = {
    user: PropTypes.object.isRequired,
};
