
import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationUserContainer } from 'Application/ApplicationUserContainer';

describe('ApplicationUserContainer', () => {
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <ApplicationUserContainer
            />);
    }
});
