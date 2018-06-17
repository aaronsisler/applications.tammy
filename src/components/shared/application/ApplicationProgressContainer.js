import React from 'react';
import PropTypes from 'prop-types';
import ApplicationProgressWidget from './ApplicationProgressWidget';

export default class ApplicationProgressContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="application_progress_container">
                <ApplicationProgressWidget {...this.props} />
            </div>
        );
    }
}

ApplicationProgressContainer.propTypes = {
    currentStep: PropTypes.number.isRequired,
    steps: PropTypes.array.isRequired,
};
