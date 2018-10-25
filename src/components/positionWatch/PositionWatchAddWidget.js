import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    startAddPositionWatch,
    startRemovePositionWatch,
    startSetPositionWatchLevel
} from 'Actions/positionsWatched';

export class PositionWatchAddWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationLevel: 'NONE',
        }
    }

    handleSetPositionWatchLevel = (e) => {
        const notificationLevel = e.target.value;
        if (this.state.notificationLevel === 'NONE') {
            this.props.startAddPositionWatch(this.props.positionId, notificationLevel);
        } else if (notificationLevel === 'NONE') {
            this.props.startRemovePositionWatch(this.props.positionId);
        } else {
            this.props.startSetPositionWatchLevel(this.props.positionId, notificationLevel);
        }
        return this.setState(() => ({ notificationLevel }));
    }

    render() {
        return (
            <div className="position_watch_add_widget">
                <div className="position_watch_add_widget__select_wrapper">
                    <div className="position_watch_add_widget__title">
                        Notification&nbsp;Level:
                    </div>
                    <div className="position_watch_add_widget__select">
                        <select
                            className="select"
                            value={this.state.notificationLevel}
                            onChange={this.handleSetPositionWatchLevel}
                        >
                            <option value='ALL'>ALL</option>
                            <option value='SOME'>SOME</option>
                            <option value='REQUIRED'>REQUIRED</option>
                            <option value='NONE'>NONE</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    positionId: state.position.positionId,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startAddPositionWatch: (positionId, notificationLevel) => dispatch(startAddPositionWatch(positionId, notificationLevel)),
    startRemovePositionWatch: (positionId) => dispatch(startRemovePositionWatch(positionId)),
    startSetPositionWatchLevel: (positionId, notificationLevel) => dispatch(startSetPositionWatchLevel(positionId, notificationLevel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchAddWidget);

PositionWatchAddWidget.propTypes = {
    positionId: PropTypes.string.isRequired,
    startAddPositionWatch: PropTypes.func.isRequired,
    startRemovePositionWatch: PropTypes.func.isRequired,
    startSetPositionWatchLevel: PropTypes.func.isRequired,
};
