import React from 'react';
import { shallow } from 'enzyme';
import UserProfilePage from '../../../src/components/user/UserProfilePage';

describe('UserProfilePage', () => {
    it('should render UserProfilePage correctly', () => {
        const wrapper = shallow(<UserProfilePage />)
        expect(wrapper).toMatchSnapshot();
    })
})
