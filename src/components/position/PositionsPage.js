import React from 'react';
import InboxContainer from '../shared/InboxContainer';

export default class PositionsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="positions_page">
                <InboxContainer />
            </div>
        );
    }
}
