import React from 'react';
import PositionContainer from 'Position/PositionContainer';

export default class PositionsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="positions_page">
                <PositionContainer />
            </div>
        );
    }
}
