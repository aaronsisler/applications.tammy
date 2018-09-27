import React from 'react';
import { shallow } from 'enzyme';
import UserDocumentsList from 'Shared/userDocuments/UserDocumentsList';
import userDocuments from '../../../fixtures/userDocuments';

describe('UserDocumentsList', () => {
    let wrapper;

    const buildWrapper = (userDocumentsInput = []) => {
        wrapper = shallow(
            <UserDocumentsList
                userDocuments={userDocumentsInput}
            />);
    }

    it('should render UserDocumentsList correctly when user documents are available', () => {
        buildWrapper(userDocuments);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render UserDocumentsList correctly when no user documents are available', () => {
        buildWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});
