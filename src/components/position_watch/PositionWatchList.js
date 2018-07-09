import React from 'react';
import PropTypes from 'prop-types';
import PositionWatchListItem from './PositionWatchListItem';

export default class PositionWatchList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        if (this.props.positions.length === 0) {
            return (
                <div className="position_watch_list empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="position_watch_list">
                {
                    this.props.positions.map((position) =>
                        <PositionWatchListItem
                            key={position.id}
                            {...position}
                        />)
                }
            </div>
        );
    }
}

PositionWatchList.propTypes = {
    positions: PropTypes.array,
};

