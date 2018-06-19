import React from 'react';
import PropTypes from 'prop-types';
import DocumentSelectionList from './DocumentSelectionList';

export default class DocumentSelectionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="document_selection_container">
                <DocumentSelectionList
                    documents={this.props.documents}
                    {...this.props}
                />
            </div>
        );
    }
}

DocumentSelectionContainer.propTypes = {
    documents: PropTypes.array.isRequired,
    handleDeselectDocument: PropTypes.func.isRequired,
    handleSelectDocument: PropTypes.func.isRequired,
};
