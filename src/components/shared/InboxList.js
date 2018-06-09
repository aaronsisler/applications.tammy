import React from 'react';
import PropTypes from 'prop-types';
import InboxListItem from './InboxListItem';

export default class InboxList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        if (this.props.positions.length === 0) {
            return (
                <div className="inbox_list empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="inbox_list">
                {
                    this.props.positions.map((position) =>
                        <InboxListItem
                            key={position.id}
                            {...position}
                        />)
                }
            </div>
        );
    }
}

InboxList.propTypes = {
    positions: PropTypes.array,
};

