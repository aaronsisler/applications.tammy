import React from 'react';
import { shallow } from 'enzyme';
import ApplicationProcessContainer from 'Application/ApplicationProcessContainer';

describe('ApplicationProcessContainer', () => {
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <ApplicationProcessContainer />
        );
    };

    beforeEach(() => {
        buildWrapper();
    });

    xit('NOT READY should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
