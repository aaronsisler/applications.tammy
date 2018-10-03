import React from 'react';
import { shallow } from 'enzyme';
import { UserDocumentsUploadWidget } from 'Shared/userDocuments/UserDocumentsUploadWidget';
// import userDocuments from '../../fixtures/userDocuments';
import { uid } from '../../fixtures/auth';

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

    it('should render UserDocumentsUploadWidget correctly', () => {
        buildWrapper();
        expect(wrapper).toBe(undefined);
    });
});
