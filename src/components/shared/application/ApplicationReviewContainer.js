import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import DocumentList from '../document/DocumentList';
import { startSubmitApplication } from '../../../actions/application';

export class ApplicationReviewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDecrementCurrentStep = () => {
        this.props.handleDecrementCurrentStep();
    }

    handleIncrementCurrentStep = () => {
        this.props.startSubmitApplication();
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
                <DocumentList documents={this.props.applicationDocuments} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    applicationDocuments: state.application.userDocuments,
})

const mapDispatchToProps = (dispatch) => ({
    startSubmitApplication: () => dispatch(startSubmitApplication()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationReviewContainer);

ApplicationReviewContainer.propTypes = {
    applicationDocuments: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired,
    maxSteps: PropTypes.number.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    startSubmitApplication: PropTypes.func.isRequired,
};
