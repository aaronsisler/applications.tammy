import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'Tools/history';
import { startAddPositionWatch } from 'Actions/positionsWatched';

export class PositionWatchAddWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetPositionWatchLevel = async (e) => {
        const notificationLevel = e.target.value;
        await this.props.startAddPositionWatch(this.props.positionId, notificationLevel);
        return history.push('/dashboard');
    }

    render() {
        return (
            <div className="position_watch_add_widget">
                <div className="position_watch_add_widget__select_wrapper">
                    <div className="position_watch_add_widget__title">
                        Notification&nbsp;Level:&nbsp;
                    </div>
                    <div className="position_watch_add_widget__select">
                        <select
                            className="select"
                            value="NONE"
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
const mapDispatchToProps = (dispatch) => ({
    startAddPositionWatch: (positionId, notificationLevel) => dispatch(startAddPositionWatch(positionId, notificationLevel)),
});

export default connect(undefined, mapDispatchToProps)(PositionWatchAddWidget);

PositionWatchAddWidget.propTypes = {
    positionId: PropTypes.string.isRequired,
    startAddPositionWatch: PropTypes.func.isRequired,
};
