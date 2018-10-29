import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';

export default class NotificationIcon extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            backgroundColor: '#ffc107',
            bottom: '-5px',
            color: 'black',
            fontSize: '1.6rem',
            left: '-10px',
            right: '',
            top: '',
        }

        this.state = { count: 1 }
    }

    render() {
        return (
            <div id="notification_icon">
                <NotificationBadge
                    count={this.props.unreadNotificationsCount}
                    effect={Effect.SCALE}
                    style={this.style}
                />
                <FontAwesomeIcon
                    icon={faEnvelope}
                    size='2x'
                    className="navbar_favicon"
                />
            </div>
        )
    }
}

NotificationIcon.propTypes = {
    unreadNotificationsCount: PropTypes.number.isRequired,
};
