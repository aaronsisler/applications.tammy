import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import UserProfileContainer from '../../user/UserProfileContainer';
import DocumentList from '../document/DocumentList';
import { startSubmitApplication } from '../../../actions/application';
import { startClearPosition } from '../../../actions/position';

export class ApplicationReviewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDecrementCurrentStep = () => {
        this.props.handleDecrementCurrentStep();
    }

    handleIncrementCurrentStep = () => {
        this.props.startSubmitApplication();
        this.props.startClearPosition();
        this.props.handleIncrementCurrentStep();
    }

    render() {
        return (
            <div className="application_review_container">
                <ApplicationProgressButtonsWidget
                    currentStep={this.props.currentStep}
                    maxSteps={this.props.maxSteps}
                    handleDecrementCurrentStep={this.handleDecrementCurrentStep}
                    handleIncrementCurrentStep={this.handleIncrementCurrentStep}
                />
                <UserProfileContainer isReadOnly={true} />
                <DocumentList documents={this.props.applicationDocuments} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    applicationDocuments: state.application.userDocuments,
})

const mapDispatchToProps = (dispatch) => ({
    startClearPosition: () => dispatch(startClearPosition()),
    startSubmitApplication: () => dispatch(startSubmitApplication()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationReviewContainer);

ApplicationReviewContainer.propTypes = {
    applicationDocuments: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired,
    maxSteps: PropTypes.number.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    startClearPosition: PropTypes.func.isRequired,
    startSubmitApplication: PropTypes.func.isRequired,
};
