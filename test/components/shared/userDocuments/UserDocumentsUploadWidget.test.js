import React from 'react';
import { shallow } from 'enzyme';
import { UserDocumentsUploadWidget } from 'Shared/userDocuments/UserDocumentsUploadWidget';
import { uid } from '../../../fixtures/auth';
import * as firebase from 'Firebase/firebase';
import { retrieveDownloadUrl } from 'Firebase/storageUtils';
jest.mock('Firebase/storageUtils')
retrieveDownloadUrl.mockReturnValue('mockDownloadUrl');

describe('UserDocumentsUploadWidget', () => {
    let wrapper;
    const startAddUserDocument = jest.fn();

    const buildWrapper = (userIdInput = uid) => {
        wrapper = shallow(
            <UserDocumentsUploadWidget
                startAddUserDocument={startAddUserDocument}
                userId={userIdInput}
            />
        );
    };

    beforeEach(() => {
        buildWrapper();
    });

    it('should render UserDocumentsUploadWidget correctly when success is populated', () => {
        expect(wrapper.setState({ success: 'Mocked Success' }));
        expect(wrapper).toMatchSnapshot();
    });

    it('should render UserDocumentsUploadWidget correctly when isUploading is true', () => {
        expect(wrapper.setState({ isUploading: true }));
        expect(wrapper).toMatchSnapshot();
    });

    it('should render UserDocumentsUploadWidget with the default state', () => {
        const defaultState = {
            success: '',
            isUploading: false,
            progress: 0,
            error: ''
        };

        expect(wrapper.state()).toEqual(defaultState);
        expect(wrapper).toMatchSnapshot();
    });

    describe('FirebaseFileUploader', () => {
        describe('storageRef', () => {
            it('should use the firebase storage ref', () => {
                expect(wrapper.find('FirebaseFileUploader').prop('storageRef')).toEqual(firebase.storage.ref(uid));
            });

            it('should have a path of userId', async () => {
                const refMock = jest.spyOn(firebase.storage, 'ref');

                await wrapper.find('FirebaseFileUploader').prop('onUploadStart')();

                expect(refMock).toHaveBeenLastCalledWith(uid);
            });
        });

        describe('onProgress() method', () => {
            it('should set progress', () => {
                const progress = 42;
                wrapper.find('FirebaseFileUploader').prop('onProgress')(progress);

                expect(wrapper.state('progress')).toBe(progress);
            });
        });

        describe('onUploadError() method', () => {
            it('should set success to error message', () => {
                const error = 'mockError';
                expect(wrapper.state('success')).toBe('');

                wrapper.find('FirebaseFileUploader').prop('onUploadError')(error);

                expect(wrapper.state('success')).toBe(error);
            });

            it('should set isUploading to false', () => {
                wrapper.setState({ isUploading: true });
                expect(wrapper.state('isUploading')).toBe(true);

                wrapper.find('FirebaseFileUploader').prop('onUploadError')();

                expect(wrapper.state('isUploading')).toBe(false);
            });
        });

        describe('onUploadStart() method', () => {
            it('should set isUploading to true', () => {
                expect(wrapper.state('isUploading')).toBe(false);

                wrapper.find('FirebaseFileUploader').prop('onUploadStart')();

                expect(wrapper.state('isUploading')).toBe(true);
            });

            it('should set success to empty', () => {
                wrapper.setState({ success: 'notEmpty' });
                expect(wrapper.state('success')).toBe('notEmpty');

                wrapper.find('FirebaseFileUploader').prop('onUploadStart')();

                expect(wrapper.state('success')).toBe('');
            });

            it('should set progress to zero', () => {
                wrapper.setState({ progress: 2 });
                expect(wrapper.state('progress')).toBe(2);

                wrapper.find('FirebaseFileUploader').prop('onUploadStart')();

                expect(wrapper.state('progress')).toBe(0);
            });
        });

        describe('onUploadSuccess() method', () => {
            const documentName = 'mockDocumentName';
            const message = `${documentName} uploaded sucessfully!`;
            const downloadUrl = 'mockDownloadUrl';

            it('should call retrieveDownloadUrl', async () => {
                await wrapper.find('FirebaseFileUploader').prop('onUploadSuccess')(documentName);

                expect(retrieveDownloadUrl).toHaveBeenLastCalledWith(uid, documentName);
            });

            it('should call startAddUserDocument', async () => {
                await wrapper.find('FirebaseFileUploader').prop('onUploadSuccess')(documentName);

                expect(startAddUserDocument).toHaveBeenLastCalledWith({ documentName, downloadUrl });
            });

            it('should set isUploading to false', async () => {
                wrapper.setState({ isUploading: true });
                expect(wrapper.state('isUploading')).toBe(true);

                await wrapper.find('FirebaseFileUploader').prop('onUploadSuccess')();

                expect(wrapper.state('isUploading')).toBe(false);
            });

            it('should set success to success message', async () => {
                await wrapper.find('FirebaseFileUploader').prop('onUploadSuccess')(documentName);

                expect(wrapper.state('success')).toBe(message);
            });

            it('should set progress to 100', async () => {
                await wrapper.find('FirebaseFileUploader').prop('onUploadSuccess')();

                expect(wrapper.state('progress')).toBe(100);
            });
        });
    });
});
