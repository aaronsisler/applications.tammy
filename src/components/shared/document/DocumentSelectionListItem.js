import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class DocumentSelectionListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDocumentSelection = () => {
        if (this.props.isDocumentAdded) {
            return this.props.handleDeselectDocument(this.props.id)
        }
        return this.props.handleSelectDocument(this.props.id)
    }

    render() {
        const selectedClassName = this.props.isDocumentAdded ? "document_selection_list_item_selected" : "";
        return (
            <div className={`document_selection_list_item ${selectedClassName}`} onClick={this.handleDocumentSelection}>
                <div className="document_selection_list_item__title">
                    {this.props.documentName}
                </div>
                <div className="document_selection_list_item__date_uploaded">
                    {this.props.dateUploaded}
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentSelectionListItem);


DocumentSelectionListItem.propTypes = {
    downloadURL: PropTypes.string.isRequired,
    documentName: PropTypes.string.isRequired,
    dateUploaded: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isDocumentAdded: PropTypes.bool.isRequired,
    handleDeselectDocument: PropTypes.func.isRequired,
    handleSelectDocument: PropTypes.func.isRequired,
};
