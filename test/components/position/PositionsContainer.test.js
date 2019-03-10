import React from 'react';
import { shallow } from 'enzyme';
import { PositionsContainer } from 'Position/PositionsContainer';
import positions, { position, positionId } from '../../fixtures/positions';

describe('PositionsContainer', () => {
    let wrapper;

    const buildWrapper = (positionsInput = [], positionIdInput, filters = { text: '' }) => {
        wrapper = shallow(
            <PositionsContainer
                filters={filters}
                positionId={positionIdInput}
                positions={positionsInput}
            />
        );
    };

    describe('when text filter is applied', () => {
        beforeEach(() => {
            const { jobId } = position;
            buildWrapper(positions, undefined, { text: jobId });
        });

        it('should render correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });


    describe('when positionId is available', () => {
        beforeEach(() => {
            buildWrapper(positions, positionId);
        });

        it('should render correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when positionId is NOT available', () => {
        it('should render correctly', () => {
            buildWrapper(positions, undefined);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
