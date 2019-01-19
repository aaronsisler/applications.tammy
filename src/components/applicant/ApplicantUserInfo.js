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
            <div id="applicant_user_info">
                <div className="user_widget">
                    <UserNameWidget
                        isReadOnly={true}
                        user={this.props.user}
                    />
                </div>
                <div className="user_widget">
                    <UserContactInfoWidget
                        isReadOnly={true}
                        user={this.props.user}
                    />
                </div>
                <div className="user_widget">
                    <UserAddressWidget
                        isReadOnly={true}
                        user={this.props.user}
                    />
                </div>
            </div>
        );
    }
}

ApplicantUserInfo.propTypes = {
    user: PropTypes.object.isRequired,
};
