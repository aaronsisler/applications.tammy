import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicantStatusWidget from 'Applicant/ApplicantStatusWidget';

export class ApplicantProcessContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="applicant_process_container">
                <ApplicantStatusWidget />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = () => ({
});

/* istanbul ignore next */
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantProcessContainer);

ApplicantProcessContainer.propTypes = {
    applicant: PropTypes.object.isRequired,
};
