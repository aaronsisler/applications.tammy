import React from 'react';
import PropTypes from 'prop-types';
import UserDocumentsListItem from './UserDocumentsListItem';

export default class DocumentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.userDocuments.length === 0) {
            return (
                <div className="document_list empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="document_list">
                {
                    this.props.userDocuments.map((userDocument, index) =>
                        <UserDocumentsListItem key={index} {...userDocument} />)
                }
            </div>
        );
    }
}

DocumentList.propTypes = {
    userDocuments: PropTypes.array,
};
