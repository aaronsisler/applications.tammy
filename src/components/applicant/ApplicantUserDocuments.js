import React from 'react';
import PropTypes from 'prop-types';
import UserDocumentsList from 'Shared/userDocuments/UserDocumentsList';

export default class ApplicantUserDocuments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="applicant_user_documents">
                <UserDocumentsList
                    userDocuments={this.props.userDocuments}
                />
            </div>
        );
    }
}

ApplicantUserDocuments.propTypes = {
    userDocuments: PropTypes.array,
};
