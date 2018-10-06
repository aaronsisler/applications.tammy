import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../../tools/history';
import { startClearApplication } from 'Actions/application';
import ApplicationProgressWidget from './ApplicationProgressWidget';

export class ApplicationProcessContainer extends React.Component {
    constructor(props) {
        super(props);

        if (!props.position) {
            return history.push('/');
        }

        this.steps = [{ title: "Personal Info" }, { title: "Documents" }, { title: "Final Review" }, { title: "Done" }];
        this.state = {
            currentStep: 0,
            maxSteps: this.steps.length,
            position: props.position,
            steps: this.steps,
        }
    }

    componentWillUnmount() {
        this.props.startClearApplication();
    }

    handleDecrementCurrentStep = () => {
        let { currentStep } = this.state;
        if (currentStep == this.state.maxSteps) {
            currentStep--;
        }
        currentStep--;
        this.setState({ currentStep });
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

    render() {
        return (
            <div className="application_process_container">
                <ApplicationProgressWidget
                    currentStep={this.state.currentStep}
                    steps={this.state.steps}
                />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    position: state.position,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearApplication: () => dispatch(startClearApplication()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProcessContainer);

ApplicationProcessContainer.propTypes = {
    position: PropTypes.object,
    startClearApplication: PropTypes.func.isRequired,
};
