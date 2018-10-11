import React from 'react';
import { shallow } from 'enzyme';
import { UserDocumentsSelectionContainer } from 'Shared/userDocuments/UserDocumentsSelectionContainer';
import userDocuments from '../../../fixtures/userDocuments';

describe('UserDocumentsSelectionList', () => {
    let wrapper;

    const buildWrapper = (applicationUserDocuments, userDocumentsInput) => {
        wrapper = shallow(
            <UserDocumentsSelectionContainer
                applicationUserDocuments={applicationUserDocuments}
                userDocuments={userDocumentsInput}
            />
        );
    };

    it('should render UserDocumentsSelectionContainer correctly', () => {
        buildWrapper(userDocuments, userDocuments);

        expect(wrapper).toMatchSnapshot();
    });
});
