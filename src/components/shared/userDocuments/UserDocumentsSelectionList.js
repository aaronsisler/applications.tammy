import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserDocumentsSelectionListItem from './UserDocumentsSelectionListItem';

export class UserDocumentsSelectionList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.userDocuments.length === 0) {
            return (
                <div className="user_documents_selection_list empty">
                    No available items
                </div>
            );
        }

        const applicationUserDocumentIds = (
            this.props.applicationUserDocuments.map((applicationUserDocument) => applicationUserDocument.userDocumentId)
        );

        return (
            <div className="user_documents_selection_list">
                {
                    this.props.userDocuments.map((userDocument, index) => {
                        const isDocumentAdded = applicationUserDocumentIds
                            .indexOf(userDocument.userDocumentId) != -1;

                        return (
                            <UserDocumentsSelectionListItem
                                key={index}
                                isDocumentAdded={isDocumentAdded}
                                {...userDocument}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    applicationUserDocuments: state.application.userDocuments,
    userDocuments: state.userDocuments,
});

export default connect(mapStateToProps)(UserDocumentsSelectionList);

UserDocumentsSelectionList.propTypes = {
    applicationUserDocuments: PropTypes.array.isRequired,
    userDocuments: PropTypes.array.isRequired,
};
