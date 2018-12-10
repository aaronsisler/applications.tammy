import React from 'react';
import { shallow } from 'enzyme';
import { PositionWatchDetails } from 'PositionWatch/PositionWatchDetails';
import positions from '../../fixtures/positions';

describe('PositionWatchDetails', () => {
    const startSetWorkflowPosition = jest.fn();
    let wrapper;
    const [position] = positions;

    const buildWrapper = (positionInput) => {
        wrapper = shallow(
            <PositionWatchDetails
                position={positionInput}
                startSetWorkflowPosition={startSetWorkflowPosition}
            />
        );
    };

    describe('when position is available', () => {
        beforeEach(() => {
            buildWrapper(position);
        });

        it('should render PositionWatchDetails correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should call startSetWorkflowPosition when the link is clicked', () => {
            // console.log(wrapper.debug())
            // console.log(wrapper.find('LinkWrapper'))
            wrapper.find('LinkWrapper').props().onClick()

            expect(startSetWorkflowPosition).toHaveBeenCalled();
        });
    });

    it('should render PositionWatchDetails correctly when position is NOT available', () => {
        buildWrapper();

        expect(wrapper).toMatchSnapshot();
    });
});
