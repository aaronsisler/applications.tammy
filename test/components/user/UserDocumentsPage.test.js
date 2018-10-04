import React from 'react';
import { shallow } from 'enzyme';
import UserDocumentsPage from 'User/UserDocumentsPage';

describe('UserDocumentsPage', () => {
    it('should render UserDocumentsPage correctly', () => {
        const wrapper = shallow(<UserDocumentsPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
