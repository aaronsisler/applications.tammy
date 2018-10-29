import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startAddNotification, startStreamNotifications } from 'Actions/notifications';
import NotificationIcon from './NotificationIcon';

export class NotificationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.startStreamNotifications();
    }

    handleCountUnreadNotifications = () => {
        const { notifications } = this.props;
        let unreadNotificationsCount = 0;
        notifications.map((notification) => notification.hasBeenViewed ? undefined : unreadNotificationsCount++);
        return unreadNotificationsCount;
    }

    render() {
        const unreadNotificationsCount = this.handleCountUnreadNotifications();
        return (
            <div>
                <div>
                    <button className="button" onClick={this.props.startAddNotification}>Click to Add</button>
                </div>
                <div id="notification_container">
                    <NotificationIcon unreadNotificationsCount={unreadNotificationsCount} />
                </div>
            </div>
        )
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    notifications: state.notifications,
})

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startAddNotification: () => dispatch(startAddNotification()),
    startStreamNotifications: () => dispatch(startStreamNotifications()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);

NotificationContainer.propTypes = {
    notifications: PropTypes.array,
    startAddNotification: PropTypes.func.isRequired,
    startStreamNotifications: PropTypes.func.isRequired,
};
