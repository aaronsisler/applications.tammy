import React from 'react';
import PropTypes from 'prop-types';

export default class ApplicantDetailsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="applicant_details_content">
                Applicant Content goes here
            </div>
        );
    }
}

ApplicantDetailsContent.propTypes = {
    applicant: PropTypes.object.isRequired,
};

