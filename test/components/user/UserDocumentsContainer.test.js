import React from 'react';
import { shallow } from 'enzyme';
import { UserDocumentsContainer } from 'User/UserDocumentsContainer';
import userDocuments from '../../fixtures/userDocuments';

describe('UserDocumentsContainer', () => {
    let wrapper;

    const buildWrapper = (userDocumentsInput = []) => {
        wrapper = shallow(
            <UserDocumentsContainer
                userDocuments={userDocumentsInput}
            />
        );
    };

    it('should render UserDocumentsContainer correctly when user documents are available', () => {
        buildWrapper(userDocuments);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render UserDocumentsContainer correctly when user documents are NOT available', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });
});
