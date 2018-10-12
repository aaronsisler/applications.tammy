import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../tools/history';
import { startClearApplication } from 'Actions/application';
import { startResetCurrentStep } from 'Actions/applicationProcess';
import ApplicationProgressWidget from './ApplicationProgressWidget';
import ApplicationUserContainer from './ApplicationUserContainer';
import ApplicationUserDocumentsContainer from './ApplicationUserDocumentsContainer';
import ApplicationReviewContainer from './ApplicationReviewContainer';
import ApplicationSubmissionContainer from './ApplicationSubmissionContainer';

export class ApplicationProcessContainer extends React.Component {
    constructor(props) {
        super(props);

        if (!props.position) {
            return history.push('/');
        }

        this.state = {
            position: props.position,
        }
    }

    componentWillUnmount() {
        this.props.startClearApplication();
        this.props.startResetCurrentStep();
    }

    render() {
        return (
            <div className="application_process_container">
                <ApplicationProgressWidget />

                {this.props.currentStep == 0 && <ApplicationUserContainer />}
                {this.props.currentStep == 1 && <ApplicationUserDocumentsContainer />}
                {this.props.currentStep == 2 && <ApplicationReviewContainer />}
                {this.props.currentStep == 3 && <ApplicationSubmissionContainer />}
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    currentStep: state.applicationProcess.currentStep,
    position: state.position,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearApplication: () => dispatch(startClearApplication()),
    startResetCurrentStep: () => dispatch(startResetCurrentStep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProcessContainer);

ApplicationProcessContainer.propTypes = {
    currentStep: PropTypes.number,
    position: PropTypes.object,
    startClearApplication: PropTypes.func.isRequired,
    startResetCurrentStep: PropTypes.func.isRequired,
};
