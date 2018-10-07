import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationProgressWidget } from 'Application/ApplicationProgressWidget';
import { steps } from '../../fixtures/applicationProcess';

describe('ApplicationProgressWidget', () => {
    let wrapper;

    const buildWrapper = (currentStep = 0) => {
        wrapper = shallow(
            <ApplicationProgressWidget
                currentStep={currentStep}
                steps={steps}
            />);
    };

    beforeEach(() => {
        buildWrapper();
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should pass currentStep to Steps current prop', () => {
        const currentStep = 2;
        buildWrapper(currentStep);

        expect(wrapper.find('Steps').prop('current')).toBe(currentStep);
    });

    it('should map steps', () => {
        const stepsTitles = [];
        wrapper.find('Steps').children().map((step) => {
            stepsTitles.push({ title: step.prop('title') });
        });

        expect(stepsTitles).toEqual(steps);
    })
});
