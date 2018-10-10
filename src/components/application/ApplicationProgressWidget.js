import React from 'react';
import { connect } from 'react-redux';
import Steps, { Step } from 'rc-steps';
import PropTypes from 'prop-types';

export class ApplicationProgressWidget extends React.Component {
    constructor(props) {
        super(props);
        this.stepsRef = [];
    }

    render() {
        return (
            <div className="application_progress_widget">
                <Steps current={this.props.currentStep}>
                    {
                        this.props.steps.map((step, index) => (
                            <Step
                                key={index}
                                ref={
                                    /* istanbul ignore next */
                                    c => this.stepsRef[index] = c
                                }
                                title={step.title}
                            />
                        ))
                    }
                </Steps>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    currentStep: state.applicationProcess.currentStep,
    steps: state.applicationProcess.steps,
});

export default connect(mapStateToProps)(ApplicationProgressWidget);

ApplicationProgressWidget.propTypes = {
    currentStep: PropTypes.number.isRequired,
    steps: PropTypes.array.isRequired,
};
