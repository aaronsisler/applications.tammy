import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../../../tools/history';
import { startClearApplication } from '../../../actions/application';
import ApplicationProgressContainer from './ApplicationProgressContainer';
import ApplicationUserContainer from './ApplicationUserContainer';
import ApplicationDocumentContainer from './ApplicationDocumentContainer';
import ApplicationReviewContainer from './ApplicationReviewContainer';
import ApplicationSubmissionContainer from './ApplicationSubmissionContainer';

export class ApplicationProcessContainer extends React.Component {
    constructor(props) {
        super(props);

        this.steps = [{ title: "Personal Info" }, { title: "Documents" }, { title: "Final Review" }, { title: "Done" }];
        this.state = {
            currentStep: 0,
            maxSteps: this.steps.length,
            position: props.position,
            steps: this.steps,
        }

        if (!props.position) {
            return history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.startClearApplication();
    }

    handleIncrementCurrentStep = () => {
        let { currentStep } = this.state;
        currentStep++;
        if (currentStep == this.state.maxSteps - 1) {
            currentStep++;
            return this.setState({ currentStep });
        }
        this.setState({ currentStep });
    }

    handleDecrementCurrentStep = () => {
        let { currentStep } = this.state;
        if (currentStep == this.state.maxSteps) {
            currentStep--;
        }
        currentStep--;
        this.setState({ currentStep });
    }

    render() {
        return (
            <div className="application_process_container">
                <div className="application_process_wrapper">
                    <ApplicationProgressContainer
                        currentStep={this.state.currentStep}
                        maxSteps={this.state.maxSteps}
                        steps={this.state.steps}
                        handleIncrementCurrentStep={this.handleIncrementCurrentStep}
                        handleDecrementCurrentStep={this.handleDecrementCurrentStep}
                    />
                    {this.state.currentStep == 0 &&
                        <ApplicationUserContainer
                            currentStep={this.state.currentStep}
                            maxSteps={this.state.maxSteps}
                            handleIncrementCurrentStep={this.handleIncrementCurrentStep}
                            handleDecrementCurrentStep={this.handleDecrementCurrentStep}
                        />
                    }
                    {this.state.currentStep == 1 &&
                        <ApplicationDocumentContainer
                            currentStep={this.state.currentStep}
                            maxSteps={this.state.maxSteps}
                            handleIncrementCurrentStep={this.handleIncrementCurrentStep}
                            handleDecrementCurrentStep={this.handleDecrementCurrentStep}
                        />
                    }
                    {this.state.currentStep == 2 &&
                        <ApplicationReviewContainer
                            currentStep={this.state.currentStep}
                            maxSteps={this.state.maxSteps}
                            handleIncrementCurrentStep={this.handleIncrementCurrentStep}
                            handleDecrementCurrentStep={this.handleDecrementCurrentStep}
                        />
                    }
                    {this.state.currentStep > 2 &&
                        <ApplicationSubmissionContainer />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    position: state.position,
})

const mapDispatchToProps = (dispatch) => ({
    startClearApplication: () => dispatch(startClearApplication()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProcessContainer);

ApplicationProcessContainer.propTypes = {
    position: PropTypes.object,
    startClearApplication: PropTypes.func.isRequired,
};
