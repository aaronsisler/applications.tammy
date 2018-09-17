import React from 'react';
import PositionsContainer from 'Position/PositionsContainer';

export default class PositionsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="positions_page">
                <PositionsContainer />
            </div>
        );
    }
}
