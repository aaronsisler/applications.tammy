import React from 'react';
import UserProfileContainer from '../user/UserProfileContainer';

export default class PositionApplyPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="position_apply_page">
                <UserProfileContainer />
            </div>
        );
    }
}
