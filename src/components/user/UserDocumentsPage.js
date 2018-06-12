import React from 'react';
import UserDocumentsContainer from './UserDocumentsContainer';

export default class UserDocumentsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="user_documents_page">
                <UserDocumentsContainer />
            </div>
        );
    }
}
