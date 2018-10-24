import React from 'react';
import { Link } from 'react-router-dom';

export default class PositionWatchAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="position_watch_add">
                <Link className="nav_link" to="/position_watch_add">Add Position Watch</Link>
            </div>
        );
    }
}
