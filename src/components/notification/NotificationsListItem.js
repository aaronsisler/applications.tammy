import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class NotificationsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notifications_list_item">
                <div className="notifications_list_item__message">
                    {this.props.notificationMessage}
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapDispatchToProps = () => ({
});

export default connect(undefined, mapDispatchToProps)(NotificationsListItem);

NotificationsListItem.propTypes = {
    notificationMessage: PropTypes.string.isRequired,
};
