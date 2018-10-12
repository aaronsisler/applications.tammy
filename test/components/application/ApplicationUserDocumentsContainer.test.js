import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationUserDocumentsContainer } from 'Application/ApplicationUserDocumentsContainer';
import userDocuments from '../../../fixtures/userDocuments';

describe('ApplicationUserDocumentsContainer', () => {
    let wrapper;

    const buildWrapper = (applicationUserDocuments, userDocumentsInput) => {
        wrapper = shallow(
            <ApplicationUserDocumentsContainer
                applicationUserDocuments={applicationUserDocuments}
                userDocuments={userDocumentsInput}
            />
        );
    };

    it('should render ApplicationUserDocumentsContainer correctly', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });
});
