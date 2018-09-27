import React from 'react';
import FileUploader from 'react-firebase-file-uploader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import { storage } from '../../../firebase/firebase';
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
        this.storageRef = `${this.props.userId}`;
    }

    handleUploadStart = () => this.setState({ isUploading: true, success: '', progress: 0 });

    handleProgress = (progress) => this.setState({ progress });

    handleUploadError = (error) => {
        this.setState({
            success: error,
            isUploading: false,
        });
    }

    handleUploadSuccess = (documentName) => {
        this.setState({ success: `${documentName} uploaded sucessfully`, progress: 100, isUploading: false });
        storage.ref(this.storageRef).child(documentName).getDownloadURL()
            .then(downloadURL => {
                this.props.startAddUserDocument(this.props.userId, { documentName, downloadURL })
            });
    };


    componentDidMount() {
    }

    render() {
        return (
            <div id="document_upload_widget">
                <div className="document_upload_content">
                    <div className="document_upload_content__loader">
                        <label className="button">
                            Upload a document
                            <FileUploader
                                accept="application/pdf, application/msword, .pdf, .docx, .doc"
                                hidden
                                name="document_upload"
                                storageRef={storage.ref(this.storageRef)}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                            />
                        </label>
                    </div>
                    {this.state.success &&
                        <div className="document_upload_content__success">
                            {this.state.success}
                        </div>
                    }
                    {this.state.isUploading &&
                        <div className="document_upload_content__progress">
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

const mapStateToProps = (state) => ({
    userId: state.user && state.user.userId,
})

const mapDispatchToProps = (dispatch) => ({
    startAddUserDocument: (userId, userDocument) => dispatch(startAddUserDocument(userId, userDocument)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDocumentsUploadWidget);

UserDocumentsUploadWidget.propTypes = {
    userId: PropTypes.string,
    startAddUserDocument: PropTypes.func.isRequired,
};
