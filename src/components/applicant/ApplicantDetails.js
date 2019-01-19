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
                    <div>
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
const mapStateToProps = (state) => ({
    applicant: state.applicant
});

export default connect(mapStateToProps)(ApplicantDetails);

ApplicantDetails.propTypes = {
    applicant: PropTypes.object,
};

