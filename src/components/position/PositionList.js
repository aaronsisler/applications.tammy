import React from 'react';
import PropTypes from 'prop-types';
import PositionListItem from './PositionListItem';

export default class PositionList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        if (this.props.positions.length === 0) {
            return (
                <div className="position_list empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="position_list">
                {
                    this.props.positions.map((position) =>
                        <PositionListItem
                            key={position.positionId}
                            {...position}
                        />)
                }
            </div>
        );
    }
}

PositionList.propTypes = {
    positions: PropTypes.array,
};

