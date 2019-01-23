import React from 'react';
import { connect } from 'react-redux';
import history from 'Tools/history';
import PropTypes from 'prop-types';
import { startClearApplicant } from 'Actions/applicant';
import ApplicantDetailsContent from 'Applicant/ApplicantDetailsContent';

export class ApplicantDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.startClearApplicant();
    }

    handleNavigateBack = () => history.push(`/applicants/${this.props.positionId}`);

    render() {
        const { applicant, position } = this.props;
        if (!position) {
            return (
                <div className="inbox_details_empty">
                    Please provide a valid position
                </div>
            )
        }

        if (!applicant) {
            return (
                <div className="inbox_details_empty">
                    Please select an applicant to view
                </div>
            )
        }
        return (
            <div className="inbox_details" >
                <div className="inbox_details_header">
                    <button
                        className="inbox_details_header__mobile_button"
                        onClick={this.handleNavigateBack}
                    >
                        Back to List
                    </button>
                    <div className="inbox_details_header__content">
                        <div className="inbox_details_header__display_name">
                            {applicant.user.displayName}
                        </div>
                        <div className="inbox_details_header__legal_name">
                            {applicant.user.lastName},&nbsp;{applicant.user.firstName}
                        </div>
                    </div>
                    <div className="inbox_details_header__contact">
                        <div className="inbox_details_header__display_phone_number">
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
    const position = positionId
    ? state.positions.find((statePosition) => statePosition.positionId == positionId)
    : undefined;

    const applicant = applicantId
        ? state.applicants.find((stateApplicant) => stateApplicant.applicantId == applicantId)
        : undefined;

    return ({
        applicant,
        applicantId,
        position,
        positionId,
    });
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearApplicant: () => dispatch(startClearApplicant()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantDetails);

ApplicantDetails.propTypes = {
    applicant: PropTypes.object,
    applicantId: PropTypes.string,
    position: PropTypes.object,
    positionId: PropTypes.string,
    startClearApplicant: PropTypes.func.isRequired,
};

