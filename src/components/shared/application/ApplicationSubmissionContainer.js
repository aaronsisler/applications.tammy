import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class ApplicationSubmissionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="application_submission_container">
                application_submission_container
            </div>
        );
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationSubmissionContainer);

ApplicationSubmissionContainer.propTypes = {
};
