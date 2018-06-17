import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import DocumentSelectionContainer from '../document/DocumentSelectionContainer';
import { startClearApplicationUserDocuments, startSetApplicationUserDocuments } from '../../../actions/application';

export class ApplicationDocumentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDecrementCurrentStep = () => {
        this.props.startClearApplicationUserDocuments();
        this.props.handleDecrementCurrentStep();
    }

    handleIncrementCurrentStep = () => {
        this.props.startSetApplicationUserDocuments();
        this.props.handleIncrementCurrentStep();
    }

    render() {
        return (
            <div className="application_document_container">
                <ApplicationProgressButtonsWidget
                    currentStep={this.props.currentStep}
                    maxSteps={this.props.maxSteps}
                    handleDecrementCurrentStep={this.handleDecrementCurrentStep}
                    handleIncrementCurrentStep={this.handleIncrementCurrentStep}
                />
                <DocumentSelectionContainer />
            </div>
        );
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
    startClearApplicationUserDocuments: () => dispatch(startClearApplicationUserDocuments()),
    startSetApplicationUserDocuments: () => dispatch(startSetApplicationUserDocuments()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDocumentContainer);

ApplicationDocumentContainer.propTypes = {
    currentStep: PropTypes.number.isRequired,
    maxSteps: PropTypes.number.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    startClearApplicationUserDocuments: PropTypes.func.isRequired,
    startSetApplicationUserDocuments: PropTypes.func.isRequired,
};
