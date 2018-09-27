import React from 'react';
import PropTypes from 'prop-types';

export default class UserDocumentsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="document_list_item" href={`${this.props.downloadURL}`}>
                <div className="document_list_item__title">
                    {this.props.documentName}
                </div>
                <div className="document_list_item__date_uploaded">
                    {this.props.dateUploaded}
                </div>
            </a>
        );
    }
}

UserDocumentsListItem.propTypes = {
    downloadURL: PropTypes.string.isRequired,
    documentName: PropTypes.string.isRequired,
    dateUploaded: PropTypes.string.isRequired,
};
