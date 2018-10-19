import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startClearPosition } from 'Actions/position';
import {
    startRemoveSubscription,
    startSetSubscriptionLevel
} from 'Actions/positionsWatched';

export class PositionWatchSubscriptionWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetSubscriptionLevel = (e) => {
        const subscriptionLevel = e.target.value;
        this.props.startSetSubscriptionLevel(this.props.positionId, subscriptionLevel)
    }

    handleRemoveSubscription = () => {
        this.props.startRemoveSubscription(this.props.positionId);
        this.props.startClearPosition();
    }

    retrieveSubscriptionLevel = () => {
        const { positionId, positionsWatched } = this.props;
        const positionData = positionsWatched
            .find((positionWatched) => positionWatched.positionId === positionId);
        return positionData.subscriptionLevel;
    }

    render() {
        const subscriptionLevel = this.retrieveSubscriptionLevel();
        return (
            <div className="position_watch_subscription_widget">
                <div className="position_watch_subscription_widget__select_wrapper">
                    <div className="position_watch_subscription_widget__title">
                        Subscription&nbsp;Level:
                    </div>
                    <div className="position_watch_subscription_widget__select">
                        <select
                            className="select"
                            value={subscriptionLevel}
                            onChange={this.handleSetSubscriptionLevel}
                        >
                            <option value="ALL">ALL</option>
                            <option value="SOME">SOME</option>
                            <option value="REQUIRED">REQUIRED</option>
                        </select>
                    </div>
                </div>
                <div className="position_watch_subscription_widget__removal">
                    <button
                        className="button"
                        onClick={this.handleRemoveSubscription}
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
    startRemoveSubscription: (positionId) => dispatch(startRemoveSubscription(positionId)),
    startSetSubscriptionLevel: (positionId, subscriptionLevel) => dispatch(startSetSubscriptionLevel(positionId, subscriptionLevel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchSubscriptionWidget);

PositionWatchSubscriptionWidget.propTypes = {
    positionId: PropTypes.string.isRequired,
    positionsWatched: PropTypes.array,
    startClearPosition: PropTypes.func.isRequired,
    startRemoveSubscription: PropTypes.func.isRequired,
    startSetSubscriptionLevel: PropTypes.func.isRequired,
};
