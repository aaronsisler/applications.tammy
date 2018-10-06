import React from 'react';
import { shallow } from 'enzyme';
import ApplicationProgressButtonsWidget from 'Application/ApplicationProgressButtonsWidget';

describe('ApplicationProgressButtonsWidget', () => {
    let wrapper;
    const maxSteps = 4;
    const handleDecrementCurrentStep = jest.fn();
    const handleIncrementCurrentStep = jest.fn();

    const buildWrapper = (currentStep = 0) => {
        wrapper = shallow(
            <ApplicationProgressButtonsWidget
                currentStep={currentStep}
                maxSteps={maxSteps}
                handleDecrementCurrentStep={handleDecrementCurrentStep}
                handleIncrementCurrentStep={handleIncrementCurrentStep}
            />);
    };

    describe('when at first step', () => {
        beforeEach(() => {
            buildWrapper();
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('clicking button calls handleIncrementCurrentStep from props', () => {
            wrapper.find('#nextStep').simulate('click');
            expect(handleIncrementCurrentStep).toHaveBeenCalled();
        });
    });

    describe('when at a middle step', () => {
        beforeEach(() => {
            buildWrapper(1);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('clicking previous step button calls handleDecrementCurrentStep from props', () => {
            wrapper.find('#previousStep').simulate('click');
            expect(handleDecrementCurrentStep).toHaveBeenCalled();
        });

        it('clicking next step button calls handleIncrementCurrentStep from props', () => {
            wrapper.find('#nextStep').simulate('click');
            expect(handleIncrementCurrentStep).toHaveBeenCalled();
        });
    });

    describe('when at final step', () => {
        beforeEach(() => {
            buildWrapper(maxSteps - 2);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('clicking previous step button calls handleDecrementCurrentStep from props', () => {
            wrapper.find('#previousStep').simulate('click');
            expect(handleDecrementCurrentStep).toHaveBeenCalled();
        });

        it('clicking submit application button calls handleIncrementCurrentStep from props', () => {
            wrapper.find('#submitApplication').simulate('click');
            expect(handleIncrementCurrentStep).toHaveBeenCalled();
        });
    });
})
