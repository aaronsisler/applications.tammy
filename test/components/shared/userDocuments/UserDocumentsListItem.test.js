import React from 'react';
import { shallow } from 'enzyme';
import UserDocumentsListItem from 'Shared/userDocuments/UserDocumentsListItem';
import userDocuments from '../../../fixtures/userDocuments';

describe('UserDocumentsListItem', () => {
    const [userDocument] = userDocuments;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <UserDocumentsListItem
                {...userDocument}
            />);
    });

    it('should render UserDocumentsListItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
