import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DocumentUploadWidget from '../shared/document/DocumentUploadWidget';
import DocumentList from '../shared/document/DocumentList';
import LoadingPage from '../core/LoadingPage';

export class UserDocumentsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {!this.props.documents && <LoadingPage />}
                {this.props.documents &&
                    <div id="user_documents_container">
                        <DocumentUploadWidget />
                        <DocumentList
                            documents={this.props.documents}
                        />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    documents: state.userDocuments,
})

export default connect(mapStateToProps)(UserDocumentsContainer);

UserDocumentsContainer.propTypes = {
    documents: PropTypes.array.isRequired,
};
