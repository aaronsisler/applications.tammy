import React from 'react';
import { connect } from 'react-redux';
import history from 'Tools/history';
import PropTypes from 'prop-types';
import ApplicantDetailsContent from 'Applicant/ApplicantDetailsContent';

export class ApplicantDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNavigateBack = () => history.push(`/applicants/${this.props.positionId}`);

    render() {
        const { applicant } = this.props;

        if (!applicant) {
            return (
                <div className="inbox_details__empty inbox_mobile">
                    Please select an applicant to view
                </div>
            )
        }
        return (
            <div className="inbox_details" >
                <div className="inbox_details_header">
                    <div className="inbox_details_header__actions">
                        <button
                            className="inbox_details_header__mobile_button"
                            onClick={this.handleNavigateBack}
                        >
                            Back to List
                        </button>
                    </div>
                    <div className="inbox_details_header__content">
                        <div className="inbox_details_header__display_name">
                            {applicant.user.displayName}
                        </div>
                        <div className="inbox_details_header__phone_number">
                            <strong>Phone:</strong>&nbsp;{applicant.user.displayPhoneNumber || "Not Provided"}
                        </div>
                        <div className="inbox_details_header__email">
                            <strong>Email:</strong>&nbsp;{applicant.user.email || "Not Provided"}
                        </div>
                    </div>
                </div>
                <div className="inbox_details_content">
                    <ApplicantDetailsContent applicant={applicant} />
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => {
    const { applicantId, positionId } = props.match.params;

    const applicant = applicantId
        ? state.applicants.find((stateApplicant) => stateApplicant.applicantId == applicantId)
        : undefined;

    return ({
        applicant,
        applicantId,
        positionId,
    });
};

export default connect(mapStateToProps)(ApplicantDetails);

ApplicantDetails.propTypes = {
    applicant: PropTypes.object,
    applicantId: PropTypes.string,
    positionId: PropTypes.string.isRequired,
};

