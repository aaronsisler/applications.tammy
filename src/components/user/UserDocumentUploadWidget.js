import React from 'react';
import { Link } from 'react-router-dom';

export default class UserDocumentUploadWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="user_document_upload_widget">
                <div className="user_document_upload__title">
                    Upload Documents
                </div>
                <div className="user_document_upload_link">
                    <Link className="nav_link" to="/document_upload" >
                        Upload Documents
                    </Link>
                </div>
            </div>
        )
    }
}
