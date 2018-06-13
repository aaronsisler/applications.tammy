import React from 'react';
import PropTypes from 'prop-types';
import DocumentListItem from './DocumentListItem';

export default class DocumentList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        if (this.props.documents.length === 0) {
            return (
                <div className="document_list empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="document_list">
                {
                    this.props.documents.map((document, index) =>
                        <DocumentListItem key={index} {...document} />)
                }
            </div>
        );
    }
}

DocumentList.propTypes = {
    documents: PropTypes.array,
};
