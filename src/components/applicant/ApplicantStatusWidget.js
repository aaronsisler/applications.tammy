import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ApplicantStatusWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { applicationStatus } = this.props.applicant;
        return (
            <div id="applicant_status_widget">
                {applicationStatus}
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    applicant: state.applicant,
});

/* istanbul ignore next */
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantStatusWidget);

ApplicantStatusWidget.propTypes = {
    applicant: PropTypes.object.isRequired,
};
