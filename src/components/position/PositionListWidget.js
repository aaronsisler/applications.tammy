import React from 'react';
import PropTypes from 'prop-types';
import PositionListItem from './PositionListItem';

export default class PositionListWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="position_list_widget">
                <div className="position_list_widget_header">
                    <div className="show_for_mobile">Positions</div>
                    <div className="show_for_desktop">Position Title</div>
                    <div className="show_for_desktop">Location</div>
                </div>
                <div className="position_list_widget_body">
                    {
                        this.props.positions ? (
                            this.props.positions.map((position) =>
                                <PositionListItem
                                    key={position.id}
                                    {...position}
                                />)
                        ) :
                            (
                                <div className="list_item list_item_message">
                                    <span>No positions</span>
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

PositionListWidget.propTypes = {
    positions: PropTypes.array,
};

