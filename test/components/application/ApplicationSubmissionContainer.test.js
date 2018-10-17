import React from 'react';
import { shallow } from 'enzyme';
import ApplicationSubmissionContainer from 'Application/ApplicationSubmissionContainer';

describe('ApplicationSubmissionContainer', () => {
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <ApplicationSubmissionContainer />
        );
    };

    beforeEach(() => {
        buildWrapper();
    });

    it('should render ApplicationSubmissionContainer correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
