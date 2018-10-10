import React from 'react';
import { shallow } from 'enzyme';
import { ApplicationProcessContainer } from 'Application/ApplicationProcessContainer';
import positions from '../../fixtures/positions';

describe('ApplicationProcessContainer', () => {
    let wrapper;
    const [position] = positions;
    const startClearApplication = jest.fn();

    const buildWrapper = (positionInput, currentStep = 0) => {
        wrapper = shallow(
            <ApplicationProcessContainer
                currentStep={currentStep}
                position={positionInput}
                startClearApplication={startClearApplication}
            />
        );
    };

    it('should render correctly when on User info step', () => {
        buildWrapper(position);

        expect(wrapper).toMatchSnapshot();
    });

    it('should set position in the state', () => {
        buildWrapper(position);

        expect(wrapper.state('position')).toEqual(position);
    });

    it('should call startClearApplication on unmount', () => {
        buildWrapper(position);

        wrapper.unmount();

        expect(startClearApplication).toHaveBeenCalled();
    });
});
