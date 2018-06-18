import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startAddApplicationUserDocument } from '../../../actions/application';

export class DocumentSelectionListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="checkbox" />
                <a className="document_selection_list_item" href={`${this.props.downloadURL}`}>

                    <div className="document_selection_list_item__title">
                        {this.props.documentName}
                    </div>
                    <div className="document_selection_list_item__date_uploaded">
                        {this.props.dateUploaded}
                    </div>
                </a>
            </div>
        );
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
    startAddApplicationUserDocument: (userDocumentId) => dispatch(startAddApplicationUserDocument(userDocumentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentSelectionListItem);


DocumentSelectionListItem.propTypes = {
    downloadURL: PropTypes.string.isRequired,
    documentName: PropTypes.string.isRequired,
    dateUploaded: PropTypes.string.isRequired,
    startAddApplicationUserDocument: PropTypes.func.isRequired,
};
