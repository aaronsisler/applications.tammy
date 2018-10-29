import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startStreamNotifications } from 'Actions/notifications';
import NotificationsIcon from 'Notification/NotificationsIcon';
import NotificationsList from 'Notification/NotificationsList';

export class NotificationsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.startStreamNotifications();
        this.state = {
            isListToggledOpen: false
        }
    }

    handleCountUnreadNotifications = () => {
        const { notifications } = this.props;
        let unreadNotificationsCount = 0;
        notifications.map((notification) => notification.hasBeenViewed ? undefined : unreadNotificationsCount++);
        return unreadNotificationsCount;
    }

    handleToggleNotificationsList = () => this.setState((prevState) => ({
        isListToggledOpen: !prevState.isListToggledOpen,
    }))

    render() {
        const unreadNotificationsCount = this.handleCountUnreadNotifications();
        return (
            <div id="notifications_container">
                <div
                    className="notifications_container__wrapper"
                    onClick={this.handleToggleNotificationsList}
                >
                    <NotificationsIcon unreadNotificationsCount={unreadNotificationsCount} />
                </div>
                {this.state.isListToggledOpen && <NotificationsList notifications={this.props.notifications} />}
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
    startStreamNotifications: () => dispatch(startStreamNotifications()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

NotificationsContainer.propTypes = {
    notifications: PropTypes.array,
    startStreamNotifications: PropTypes.func.isRequired,
};
