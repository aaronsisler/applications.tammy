import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicantDetailsContent from 'Applicant/ApplicantDetailsContent';

export class ApplicantDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { applicant } = this.props;
        return (
            <div className="applicant_details">
                {!applicant &&
                    <div className="empty">
                        Please select an applicant to view
                    </div>
                }
                {applicant &&
                    <div className="applicant_details_widget">
                        <div className="applicant_details_header">
                            <div className="applicant_details__names">
                                <div className="applicant_details__display_name">
                                    {applicant.user.displayName}
                                </div>
                                <div className="applicant_details__legal_name">
                                    {applicant.user.lastName},&nbsp;{applicant.user.firstName}
                                </div>
                            </div>
                            <div className="applicant_details_contact">
                                <div className="applicant_details__display_phone_number">
                                    <strong>Phone:</strong>&nbsp;{applicant.user.displayPhoneNumber || "Not Provided"}
                                </div>
                                <div className="applicant_details__email">
                                    <strong>Email:</strong>&nbsp;{applicant.user.email || "Not Provided"}
                                </div>
                            </div>
                        </div>
                        <ApplicantDetailsContent applicant={applicant} />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    applicant: state.applicant
});

export default connect(mapStateToProps)(ApplicantDetails);

ApplicantDetails.propTypes = {
    applicant: PropTypes.object,
};

