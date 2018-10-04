import React from 'react';
import UserProfileContainer from './UserProfileContainer';

export default class UserProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="user_profile_page">
                <UserProfileContainer />
            </div>
        );
    }
}
