import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../src/components/core/LoginPage';

describe('LoginPage', () => {
    let wrapper;
    let startLogin;
    beforeEach(() => {
        startLogin = jest.fn();
        wrapper = shallow(<LoginPage startLogin={startLogin} />);
    });

    it('should render LoginPage correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call startLogin when button is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(startLogin).toHaveBeenCalled();
    });
})
