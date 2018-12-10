import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startClearPosition } from 'Actions/position';
import {
    startRemovePositionWatch,
    startSetPositionWatchLevel
} from 'Actions/positionsWatched';

export class PositionWatchEditWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetPositionWatchLevel = (e) => {
        const notificationLevel = e.target.value;
        this.props.startSetPositionWatchLevel(this.props.positionId, notificationLevel)
    }

    handleRemovePositionWatch = () => {
        this.props.startRemovePositionWatch(this.props.positionId);
        this.props.startClearPosition();
    }

    retrievePositionWatchLevel = () => {
        const { positionId, positionsWatched } = this.props;
        const positionData = positionsWatched
            .find((positionWatched) => positionWatched.positionId === positionId);
        return positionData ? positionData.notificationLevel : undefined;
    }

    render() {
        const currentPositionwatchLevel = this.retrievePositionWatchLevel();
        return (
            <div className="position_watch_edit_widget">
                <div className="position_watch_edit_widget__select_wrapper">
                    <div className="position_watch_edit_widget__title">
                        Notification&nbsp;Level:&nbsp;
                    </div>
                    {currentPositionwatchLevel &&
                        <div className="position_watch_edit_widget__select">
                            <select
                                className="select"
                                value={currentPositionwatchLevel}
                                onChange={this.handleSetPositionWatchLevel}
                            >
                                <option value="ALL">ALL</option>
                                <option value="SOME">SOME</option>
                                <option value="REQUIRED">REQUIRED</option>
                            </select>
                        </div>
                    }
                </div>
                <div className="position_watch_edit_widget__removal">
                    <button
                        className="button"
                        onClick={this.handleRemovePositionWatch}
                    >
                        Remove Watch
                    </button>
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    positionId: state.position.positionId,
    positionsWatched: state.positionsWatched,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
    startRemovePositionWatch: (positionId) => dispatch(startRemovePositionWatch(positionId)),
    startSetPositionWatchLevel: (positionId, notificationLevel) => dispatch(startSetPositionWatchLevel(positionId, notificationLevel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchEditWidget);

PositionWatchEditWidget.propTypes = {
    positionId: PropTypes.string.isRequired,
    positionsWatched: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
    startRemovePositionWatch: PropTypes.func.isRequired,
    startSetPositionWatchLevel: PropTypes.func.isRequired,
};
