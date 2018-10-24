import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startClearPosition } from 'Actions/position';
import {
    startAddSubscription,
    startRemoveSubscription,
    startSetSubscriptionLevel
} from 'Actions/positionsWatched';

export class PositionWatchAddSubscriptionWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptionLevel: 'NONE',
        }
    }

    handleSetSubscriptionLevel = (e) => {
        const subscriptionLevel = e.target.value;
        if (this.state.subscriptionLevel === 'NONE') {
            this.props.startAddSubscription(this.props.positionId, subscriptionLevel);
        } else if (subscriptionLevel === 'NONE') {
            this.handleRemoveSubscription();
        } else {
            this.props.startSetSubscriptionLevel(this.props.positionId, subscriptionLevel);
        }
        return this.setState(() => ({ subscriptionLevel }));
    }

    handleRemoveSubscription = () => {
        this.props.startRemoveSubscription(this.props.positionId);
    }

    render() {
        return (
            <div className="position_watch_subscription_widget">
                <div className="position_watch_subscription_widget__select_wrapper">
                    <div className="position_watch_subscription_widget__title">
                        Subscription&nbsp;Level:
                    </div>
                    <div className="position_watch_subscription_widget__select">
                        <select
                            className="select"
                            value={this.state.subscriptionLevel}
                            onChange={this.handleSetSubscriptionLevel}
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
    startAddSubscription: (positionId, subscriptionLevel) => dispatch(startAddSubscription(positionId, subscriptionLevel)),
    startClearPosition: () => dispatch(startClearPosition()),
    startRemoveSubscription: (positionId) => dispatch(startRemoveSubscription(positionId)),
    startSetSubscriptionLevel: (positionId, subscriptionLevel) => dispatch(startSetSubscriptionLevel(positionId, subscriptionLevel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionWatchAddSubscriptionWidget);

PositionWatchAddSubscriptionWidget.propTypes = {
    positionId: PropTypes.string.isRequired,
    startClearPosition: PropTypes.func.isRequired,
    startAddSubscription: PropTypes.func.isRequired,
    startRemoveSubscription: PropTypes.func.isRequired,
    startSetSubscriptionLevel: PropTypes.func.isRequired,
};
