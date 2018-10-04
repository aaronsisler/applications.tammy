import React from 'react';
import { shallow } from 'enzyme';
import LoggedOutPage from 'Core/LoggedOutPage';

describe('LoggedOutPage', () => {
    it('should render LoggedOutPage correctly', () => {
        const wrapper = shallow(<LoggedOutPage />)
        expect(wrapper).toMatchSnapshot();
    })
})
