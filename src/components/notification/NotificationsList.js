import React from 'react';
import PropTypes from 'prop-types';
import NotificationsListItem from 'Notification/NotificationsListItem';

export default class NotificationsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.notifications.length === 0) {
            return (
                <div id="notifications_list" className="empty">
                    No available items
                </div>
            );
        }

        return (
            <div id="notifications_list">
                <div className="notifications_list__header">
                    <div className="notifications_list__title">
                        Notifications
                    </div>
                    <div className="notifications_list__action">
                        <button className="button">Mark all as Read</button>
                    </div>
                </div>
                <div className="notifications_list__content">
                    {
                        this.props.notifications.map((notification) =>
                            <NotificationsListItem
                                key={notification.notificationId}
                                {...notification}
                            />)
                    }
                </div>
            </div>
        );
    }
}

NotificationsList.propTypes = {
    notifications: PropTypes.array,
};
