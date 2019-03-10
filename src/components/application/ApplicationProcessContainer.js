import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'Tools/history';
import { startResetApplicationProcess } from 'Actions/applicationProcess';
import ApplicationProgressWidget from './ApplicationProgressWidget';
import ApplicationUserContainer from './ApplicationUserContainer';
import ApplicationUserDocumentsContainer from './ApplicationUserDocumentsContainer';
import ApplicationReviewContainer from './ApplicationReviewContainer';
import ApplicationSubmissionContainer from './ApplicationSubmissionContainer';

export class ApplicationProcessContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.position) {
            history.push('/not_found');
        }
    }

    componentWillUnmount() {
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
                {this.props.currentStep == 2 && <ApplicationReviewContainer positionId={this.props.positionId} />}
                {this.props.currentStep == 3 && <ApplicationSubmissionContainer />}
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => {
    const { positionId } = props.match.params;
    const position = positionId
        ? state.positions.find((statePosition) => statePosition.positionId == positionId)
        : undefined;

    return ({
        currentStep: state.applicationProcess.currentStep,
        position,
        positionId,
    });
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startResetApplicationProcess: () => dispatch(startResetApplicationProcess()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProcessContainer);

ApplicationProcessContainer.propTypes = {
    currentStep: PropTypes.number.isRequired,
    position: PropTypes.object,
    positionId: PropTypes.string.isRequired,
    startResetApplicationProcess: PropTypes.func.isRequired,
};
