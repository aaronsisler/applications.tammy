import React from 'react';
import UserProfileContainer from './UserProfileContainer';

export default class UserAccountPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="user_account_page">
                <UserProfileContainer />
            </div>
        );
    }
}
