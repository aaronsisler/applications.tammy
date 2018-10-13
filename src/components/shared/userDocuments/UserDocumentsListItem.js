import React from 'react';
import PropTypes from 'prop-types';

export default class UserDocumentsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="user_documents_list_item" href={`${this.props.downloadUrl}`}>
                <div className="user_documents_list_item__title">
                    {this.props.documentName}
                </div>
                <div className="user_documents_list_item__date_uploaded">
                    {this.props.dateUploaded}
                </div>
            </a>
        );
    }
}

UserDocumentsListItem.propTypes = {
    downloadUrl: PropTypes.string.isRequired,
    documentName: PropTypes.string.isRequired,
    dateUploaded: PropTypes.string.isRequired,
};
