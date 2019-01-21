import React from 'react';
import PropTypes from 'prop-types';
import PositionsListItem from './PositionsListItem';

export default class PositionsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.positions.length === 0) {
            return (
                <div className="positions_list empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="positions_list">
                {
                    this.props.positions.map((position) =>
                        <PositionsListItem
                            key={position.positionId}
                            linkRoute={this.props.linkRoute}
                            {...position}
                        />)
                }
            </div>
        );
    }
}

PositionsList.propTypes = {
    positions: PropTypes.array,
    linkRoute: PropTypes.string,
};
