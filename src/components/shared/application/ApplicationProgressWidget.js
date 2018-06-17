import React from 'react';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import PropTypes from 'prop-types';

export default class ApplicationProgressWidget extends React.Component {
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
                            <Step ref={c => this.stepsRef[index] = c}
                                key={index}
                                title={step.title}
                            />
                        ))
                    }
                </Steps>
            </div>
        );
    }
}

ApplicationProgressWidget.propTypes = {
    currentStep: PropTypes.number,
    steps: PropTypes.array,
};
