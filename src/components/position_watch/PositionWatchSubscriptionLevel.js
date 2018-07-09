import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetSubscriptionLevel } from '../../actions/position_watch';

export class PositionWatchSubscriptionLevel extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSetSubscriptionLevel = (e) => {
        const subscriptionLevel = e.target.value;
        this.props.startSetSubscriptionLevel(this.props.id, subscriptionLevel);
    }

    render() {
        return (
            <div className="position_watch_subscription_level">
                <div className="position_watch_subscription_level__title">
                    Subscription Level
                </div>
                <div className="position_watch_subscription_level__input">
                    <select
                        className="select"
                        value={this.props.subscriptionLevel}
                        onChange={this.handleSetSubscriptionLevel}
                    >
                        <option value="ALL">ALL</option>
                        <option value="SOME">SOME</option>
                        <option value="REQUIRED">REQUIRED</option>
                        <option value="NONE">NONE</option>
                    </select>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetSubscriptionLevel: (id, subscriptionLevel) => dispatch(startSetSubscriptionLevel(id, subscriptionLevel))
});

export default connect(undefined, mapDispatchToProps)(PositionWatchSubscriptionLevel);

PositionWatchSubscriptionLevel.propTypes = {
    id: PropTypes.string.isRequired,
    subscriptionLevel: PropTypes.string.isRequired,
    startSetSubscriptionLevel: PropTypes.func.isRequired,
};
