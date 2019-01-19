import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationProcessContainer } from 'Application/ApplicationProcessContainer';
import positions from '../../fixtures/positions';

describe('ApplicationProcessContainer', () => {
    let wrapper;
    const [position] = positions;
    const startResetApplicationProcess = jest.fn();

    const buildWrapper = (positionInput, currentStep = 0) => {
        wrapper = shallow(
            <ApplicationProcessContainer
                currentStep={currentStep}
                position={positionInput}
                startResetApplicationProcess={startResetApplicationProcess}
            />
        );
    };

    it('should render correctly when on User info step', () => {
        buildWrapper(position);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when on User Documents step', () => {
        buildWrapper(position, 1);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when on Review step', () => {
        buildWrapper(position, 2);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when on Submitted step', () => {
        buildWrapper(position, 3);

        expect(wrapper).toMatchSnapshot();
    });

    it('should call startResetApplicationProcess on unmount', () => {
        buildWrapper(position);

        wrapper.unmount();

        expect(startResetApplicationProcess).toHaveBeenCalled();
    });
});
