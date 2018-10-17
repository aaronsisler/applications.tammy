import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationProgressButtonsWidget } from 'Application/ApplicationProgressButtonsWidget';
import { steps } from '../../fixtures/applicationProcess';

describe('ApplicationProgressButtonsWidget', () => {
    let wrapper;
    const maxSteps = steps.length;
    const handleDecrementStep = jest.fn();
    const handleIncrementStep = jest.fn();

    const buildWrapper = (currentStep = 0) => {
        wrapper = shallow(
            <ApplicationProgressButtonsWidget
                currentStep={currentStep}
                handleDecrementStep={handleDecrementStep}
                handleIncrementStep={handleIncrementStep}
                maxSteps={maxSteps}
            />);
    };

    describe('when at first step', () => {
        beforeEach(() => {
            buildWrapper();
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('clicking button calls handleIncrementStep from props', () => {
            wrapper.find('#nextStep').simulate('click');
            expect(handleIncrementStep).toHaveBeenCalled();
        });
    });

    describe('when at a middle step', () => {
        beforeEach(() => {
            buildWrapper(1);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('clicking previous step button calls handleDecrementStep from props', () => {
            wrapper.find('#previousStep').simulate('click');
            expect(handleDecrementStep).toHaveBeenCalled();
        });

        it('clicking next step button calls handleIncrementCurrentStep from props', () => {
            wrapper.find('#nextStep').simulate('click');
            expect(handleIncrementStep).toHaveBeenCalled();
        });
    });

    describe('when at review step', () => {
        beforeEach(() => {
            buildWrapper(maxSteps - 2);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('clicking previous step button calls handleDecrementStep from props', () => {
            wrapper.find('#previousStep').simulate('click');
            expect(handleDecrementStep).toHaveBeenCalled();
        });

        it('clicking submit application button calls handleIncrementStep from props', () => {
            wrapper.find('#submitApplication').simulate('click');
            expect(handleIncrementStep).toHaveBeenCalled();
        });
    });

    describe('when at final step', () => {
        beforeEach(() => {
            buildWrapper(maxSteps - 1);
        });

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
