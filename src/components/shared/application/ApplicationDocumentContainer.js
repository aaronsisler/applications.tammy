import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationProgressButtonsWidget from './ApplicationProgressButtonsWidget';
import DocumentSelectionContainer from '../document/DocumentSelectionContainer';
import {
    startAddApplicationUserDocument,
    startRemoveApplicationUserDocument,
} from '../../../actions/application';

export class ApplicationDocumentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userDocuments = this.props.userDocuments.map((userDocument) => ({
            ...userDocument,
            isDocumentAdded: this.props.applicationDocuments.some((applicationDocument) => applicationDocument.id == userDocument.id),
        }))
        return (
            <div className="application_document_container">
                {this.props.applicationDocuments.length == 0 &&
                    <div className="application_document_container__no_docs">
                        Please select at least one document to continue
                    </div>
                }
                {this.props.applicationDocuments.length > 0 &&
                    <ApplicationProgressButtonsWidget
                        currentStep={this.props.currentStep}
                        maxSteps={this.props.maxSteps}
                        handleDecrementCurrentStep={this.props.handleDecrementCurrentStep}
                        handleIncrementCurrentStep={this.props.handleIncrementCurrentStep}
                    />
                }
                <DocumentSelectionContainer
                    documents={userDocuments}
                    handleDeselectDocument={this.props.startRemoveApplicationUserDocument}
                    handleSelectDocument={this.props.startAddApplicationUserDocument}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    applicationDocuments: state.application.userDocuments,
    userDocuments: state.userDocuments,
})

const mapDispatchToProps = (dispatch) => ({
    startAddApplicationUserDocument: (userDocumentId) => dispatch(startAddApplicationUserDocument(userDocumentId)),
    startRemoveApplicationUserDocument: (userDocumentId) => dispatch(startRemoveApplicationUserDocument(userDocumentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDocumentContainer);

ApplicationDocumentContainer.propTypes = {
    applicationDocuments: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired,
    maxSteps: PropTypes.number.isRequired,
    handleIncrementCurrentStep: PropTypes.func.isRequired,
    handleDecrementCurrentStep: PropTypes.func.isRequired,
    startAddApplicationUserDocument: PropTypes.func.isRequired,
    startRemoveApplicationUserDocument: PropTypes.func.isRequired,
    userDocuments: PropTypes.array.isRequired,
};
