
import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationUserContainer } from 'Application/ApplicationUserContainer';

describe('ApplicationUserContainer', () => {
    const startClearApplicationUser = jest.fn();
    const startDecrementCurrentStep = jest.fn();
    const startIncrementCurrentStep = jest.fn();
    const startSetApplicationUser = jest.fn();
    const ApplicationProgressButtonsWidget = 'Connect(ApplicationProgressButtonsWidget)';
    let wrapper;

    const buildWrapper = () => {
        wrapper = shallow(
            <ApplicationUserContainer
                startClearApplicationUser={startClearApplicationUser}
                startDecrementCurrentStep={startDecrementCurrentStep}
                startIncrementCurrentStep={startIncrementCurrentStep}
                startSetApplicationUser={startSetApplicationUser}
            />);
    };

    beforeEach(() => {
        buildWrapper();
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe(`handleDecrementStep() method on Progress buttons Widget`, () => {
        it('should call startClearApplicationUser()', () => {
            wrapper.find(ApplicationProgressButtonsWidget).prop('handleDecrementStep')();
            expect(startClearApplicationUser).toHaveBeenCalled();
        });

        it('should call startDecrementCurrentStep()', () => {
            wrapper.find(ApplicationProgressButtonsWidget).prop('handleDecrementStep')();
            expect(startClearApplicationUser).toHaveBeenCalled();
        });
    });

    describe(`handleIncrementStep() method on Progress buttons Widget`, () => {
        it('should call startSetApplicationUser()', () => {
            wrapper.find(ApplicationProgressButtonsWidget).prop('handleIncrementStep')();
            expect(startSetApplicationUser).toHaveBeenCalled();
        });

        it('should call startIncrementCurrentStep()', () => {
            wrapper.find(ApplicationProgressButtonsWidget).prop('handleIncrementStep')();
            expect(startIncrementCurrentStep).toHaveBeenCalled();
        });
    });
});
