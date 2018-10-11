import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserDocumentsSelectionList from './UserDocumentsSelectionList';

export class UserDocumentsSelectionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user_documents_selection_container">
                <UserDocumentsSelectionList
                    applicationUserDocuments={this.props.applicationUserDocuments}
                    userDocuments={this.props.userDocuments}
                />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    applicationUserDocuments: state.application.userDocuments,
    userDocuments: state.userDocuments,
});

export default connect(mapStateToProps)(UserDocumentsSelectionContainer);

UserDocumentsSelectionContainer.propTypes = {
    applicationUserDocuments: PropTypes.array.isRequired,
    userDocuments: PropTypes.array.isRequired,
};
