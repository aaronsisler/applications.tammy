import React from 'react';
import { shallow } from 'enzyme';
import { UserDocumentsSelectionList } from 'Shared/userDocuments/UserDocumentsSelectionList';
import userDocuments from '../../../fixtures/userDocuments';

describe('UserDocumentsSelectionList', () => {
    let wrapper;

    const buildWrapper = (applicationUserDocuments, userDocumentsInput) => {
        wrapper = shallow(
            <UserDocumentsSelectionList
                applicationUserDocuments={applicationUserDocuments}
                userDocuments={userDocumentsInput}
            />
        );
    };

    it('should render UserDocumentsSelectionList correctly when user documents are available', () => {
        buildWrapper(userDocuments, userDocuments);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render UserDocumentsSelectionList correctly when user documents is empty', () => {
        buildWrapper([], []);

        expect(wrapper).toMatchSnapshot();
    });
});
