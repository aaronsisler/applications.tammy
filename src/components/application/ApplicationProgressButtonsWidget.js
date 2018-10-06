import React from 'react';
import PropTypes from 'prop-types';

export default class ApplicationProgressButtonsWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="application_progress_buttons_widget">
                <div className="application_progress_buttons_wrapper">
                    {this.props.currentStep > 0 &&
                        <button id='previousStep' className="button" onClick={this.props.handleDecrementCurrentStep}>Previous Step</button>
                    }
                    {this.props.currentStep < (this.props.maxSteps - 2) &&
                        <button id='nextStep' className="button" onClick={this.props.handleIncrementCurrentStep}>Save and Continue</button>
                    }
                    {this.props.currentStep == (this.props.maxSteps - 2) &&
                        <button id='submitApplication' className="button" onClick={this.props.handleIncrementCurrentStep}>Submit Application</button>
                    }
                </div>
            </div>
        );
    }
}

ApplicationProgressButtonsWidget.propTypes = {
    currentStep: PropTypes.number.isRequired,
    maxSteps: PropTypes.number.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
};
