import React from 'react';
import FirebaseFileUploader from 'react-firebase-file-uploader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import { storage } from 'Firebase/firebase';
import { retrieveDownloadUrl } from 'Firebase/storageUtils';
import { startAddUserDocument } from 'Actions/userDocuments';

export class UserDocumentsUploadWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: '',
            isUploading: false,
            progress: 0,
            error: ''
        };
    }

    handleUploadStart = () => this.setState({ isUploading: true, success: '', progress: 0 });

    handleProgress = (progress) => this.setState({ progress });

    handleUploadError = (error) => {
        this.setState({
            success: error,
            isUploading: false,
        });
    };

    handleUploadSuccess = async (documentName) => {
        const downloadUrl = await retrieveDownloadUrl(this.props.userId, documentName);
        this.props.startAddUserDocument({ documentName, downloadUrl });
        this.setState({ success: `${documentName} uploaded sucessfully!`, progress: 100, isUploading: false });
    };

    render() {
        return (
            <div id="user_documents_upload_widget">
                <div className="user_documents_upload_content">
                    <div className="user_documents_upload_content__loader">
                        <label className="button">
                            Upload a document
                            <FirebaseFileUploader
                                accept="application/pdf, application/msword, .pdf, .docx, .doc"
                                hidden
                                name="user_documents_upload"
                                storageRef={storage.ref(`${this.props.userId}`)}
                                onProgress={this.handleProgress}
                                onUploadError={this.handleUploadError}
                                onUploadStart={this.handleUploadStart}
                                onUploadSuccess={this.handleUploadSuccess}
                            />
                        </label>
                    </div>
                    {this.state.success &&
                        <div className="user_documents_upload_content__success">
                            {this.state.success}
                        </div>
                    }
                    {this.state.isUploading &&
                        <div className="user_documents_upload_content__progress">
                            <Progress
                                percent={this.state.progress}
                            />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    userId: state.user && state.user.userId,
})

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startAddUserDocument: (userDocument) => dispatch(startAddUserDocument(userDocument)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDocumentsUploadWidget);

UserDocumentsUploadWidget.propTypes = {
    userId: PropTypes.string,
    startAddUserDocument: PropTypes.func.isRequired,
};
