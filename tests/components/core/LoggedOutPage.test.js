import React from 'react';
import { shallow } from 'enzyme';
import LoggedOutPage from '../../../src/components/core/LoggedOutPage';

describe('LoggedOutPage', () => {
    it('should render LoggedOutPage correctly', () => {
        const wrapper = shallow(<LoggedOutPage />)
        expect(wrapper).toMatchSnapshot();
    })
})
