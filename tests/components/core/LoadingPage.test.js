import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from 'Core/LoadingPage';

describe('LoadingPage', () => {
    it('should render LoadingPage correctly', () => {
        const wrapper = shallow(<LoadingPage />)
        expect(wrapper).toMatchSnapshot();
    })
})
