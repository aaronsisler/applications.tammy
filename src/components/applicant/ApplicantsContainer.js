import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetApplicants } from 'Actions/applicants';
import ApplicantDetails from 'Applicant/ApplicantDetails';
import ApplicantsList from 'Applicant/ApplicantsList';

export class ApplicantsContainer extends React.Component {
    constructor(props) {
        super(props);
        // props.startSetApplicants();
    }

    render() {
        return (
            <div className="inbox_container">
                {this.props.applicants &&
                    <div className="inbox_widget">
                        <div className="inbox_list">
                            <ApplicantsList applicants={this.props.applicants} />
                        </div>
                        <ApplicantDetails />
                    </div>
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    applicants: state.applicants,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startSetApplicants: () => dispatch(startSetApplicants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsContainer);

ApplicantsContainer.propTypes = {
    applicants: PropTypes.array,
    startSetApplicants: PropTypes.func.isRequired,
};
