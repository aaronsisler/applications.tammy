import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    startAddApplicationUserDocument,
    startRemoveApplicationUserDocument,
} from 'Actions/application';

export class UserDocumentsSelectionListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleUserDocumentSelection = () => {
        if (this.props.isDocumentAdded) {
            return this.props.startRemoveApplicationUserDocument(this.props.userDocumentId)
        }
        return this.props.startAddApplicationUserDocument(this.props.userDocumentId)
    }

    render() {
        const selectedClassName = this.props.isDocumentAdded ? "user_documents_selection_list_item_selected" : "";
        return (
            <div
                className={`user_documents_selection_list_item ${selectedClassName}`}
                onClick={this.handleUserDocumentSelection}
            >
                <div className="user_documents_selection_list_item__title">
                    {this.props.documentName}
                </div>
                <div className="user_documents_selection_list_item__date_uploaded">
                    {this.props.dateUploaded}
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startAddApplicationUserDocument: (userDocumentId) => dispatch(startAddApplicationUserDocument(userDocumentId)),
    startRemoveApplicationUserDocument: (userDocumentId) => dispatch(startRemoveApplicationUserDocument(userDocumentId)),
});

export default connect(undefined, mapDispatchToProps)(UserDocumentsSelectionListItem);


UserDocumentsSelectionListItem.propTypes = {
    dateUploaded: PropTypes.string.isRequired,
    documentName: PropTypes.string.isRequired,
    downloadUrl: PropTypes.string.isRequired,
    isDocumentAdded: PropTypes.bool.isRequired,
    startAddApplicationUserDocument: PropTypes.func.isRequired,
    startRemoveApplicationUserDocument: PropTypes.func.isRequired,
    userDocumentId: PropTypes.string.isRequired,
};
