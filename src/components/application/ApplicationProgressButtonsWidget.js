import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ApplicationProgressButtonsWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="application_progress_buttons_widget">
                <div className="application_progress_buttons_wrapper">
                    {
                        (this.props.currentStep > 0 && this.props.currentStep <= (this.props.maxSteps - 2)) &&
                        <button
                            id='previousStep'
                            className="button"
                            onClick={this.props.handleDecrementStep}
                        >
                            Previous Step
                        </button>
                    }
                    {this.props.currentStep < (this.props.maxSteps - 2) &&
                        <button
                            id='nextStep'
                            className="button"
                            onClick={this.props.handleIncrementStep}
                        >
                            Save and Continue
                        </button>
                    }
                    {this.props.currentStep == (this.props.maxSteps - 2) &&
                        <button
                            id='submitApplication'
                            className="button"
                            onClick={this.props.handleIncrementStep}
                        >
                            Submit Application
                        </button>
                    }
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    currentStep: state.applicationProcess.currentStep,
    maxSteps: state.applicationProcess.maxSteps,
});

export default connect(mapStateToProps)(ApplicationProgressButtonsWidget);

ApplicationProgressButtonsWidget.propTypes = {
    currentStep: PropTypes.number.isRequired,
    handleDecrementStep: PropTypes.func.isRequired,
    handleIncrementStep: PropTypes.func.isRequired,
    maxSteps: PropTypes.number.isRequired,
};
