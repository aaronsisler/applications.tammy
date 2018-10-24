import React from 'react';
import PositionsWatchAddContainer from 'PositionWatch/PositionsWatchAddContainer';

export default class PositionsWatchAddPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="positions_watch_add_page">
                <PositionsWatchAddContainer />
            </div>
        );
    }
}
