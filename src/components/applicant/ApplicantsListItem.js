import React from 'react';
import PropTypes from 'prop-types';
import history from 'Tools/history';

export default class ApplicantsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNavigate = () => history.push(`/applicants/${this.props.positionId}/${this.props.applicantId}`);

    render() {
        return (
            <div className="applicants_list_item" onClick={this.handleNavigate}>
                <div className="applicants_list_item__content">
                    <div className="applicants_list_item__display_name">
                        {this.props.displayName}
                    </div>
                    <div className="applicants_list_item__legal_name">
                        {this.props.lastName},&nbsp;{this.props.firstName}
                    </div>
                </div>
            </div>
        );
    }
}

ApplicantsListItem.propTypes = {
    applicantId: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    positionId: PropTypes.string.isRequired,
};
