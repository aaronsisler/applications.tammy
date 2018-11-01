import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ApplicantDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { applicant } = this.props;
        return (
            <div className="position_details">
                {!applicant &&
                    <div className="empty">
                        Please select an applicant to view
                    </div>
                }
                {applicant &&
                    <div className="position_details_widget">
                        <div className="position_details_header">
                            <div>
                                <div className="applicant_details__title">
                                    {applicant.displayName}
                                </div>
                            </div>
                        </div>
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

