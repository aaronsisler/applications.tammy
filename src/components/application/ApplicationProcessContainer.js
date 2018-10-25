import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../tools/history';
import { startClearApplication } from 'Actions/application';
import { startResetApplicationProcess } from 'Actions/applicationProcess';
import ApplicationProgressWidget from './ApplicationProgressWidget';
import ApplicationUserContainer from './ApplicationUserContainer';
import ApplicationUserDocumentsContainer from './ApplicationUserDocumentsContainer';
import ApplicationReviewContainer from './ApplicationReviewContainer';
import ApplicationSubmissionContainer from './ApplicationSubmissionContainer';

export class ApplicationProcessContainer extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.positionId) {
            return history.push('/');
        }
    }

    componentDidUpdate() {
        if (!this.props.positionId) {
            return history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.startClearApplication();
        this.props.startResetApplicationProcess();
    }

    render() {
        return (
            <div className="application_process_container">
                <div className="application_process_container__wrapper">
                    <ApplicationProgressWidget />
                </div>

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
    positionId: state.applicationProcess.positionId,
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearApplication: () => dispatch(startClearApplication()),
    startResetApplicationProcess: () => dispatch(startResetApplicationProcess()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProcessContainer);

ApplicationProcessContainer.propTypes = {
    currentStep: PropTypes.number,
    positionId: PropTypes.string,
    startClearApplication: PropTypes.func.isRequired,
    startResetApplicationProcess: PropTypes.func.isRequired,
};
