import React from 'react';
import PropTypes from 'prop-types';
import ApplicantsListItem from 'Applicant/ApplicantsListItem';

export default class ApplicantsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.applicants.length === 0) {
            return (
                <div className="applicants_list empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="applicants_list">
                {
                    this.props.applicants.map((applicant) =>
                        <ApplicantsListItem
                            key={applicant.applicantId}
                            applicantId={applicant.applicantId}
                            displayName={applicant.user.displayName}
                            firstName={applicant.user.firstName}
                            lastName={applicant.user.lastName}
                            positionId={this.props.positionId}
                        />)
                }
            </div>
        );
    }
}

ApplicantsList.propTypes = {
    applicants: PropTypes.array.isRequired,
    positionId: PropTypes.string.isRequired,
};
