import React from 'react';
import { shallow } from 'enzyme';
import { PositionListFilter } from 'Position/PositionListFilter';

describe('PositionListFilter', () => {
    const setPositionsTextFilter = jest.fn();
    const filters = { text: 'initial filter' };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <PositionListFilter
                filters={filters}
                setPositionsTextFilter={setPositionsTextFilter}
            />
        );
    })

    it('should render PositionListFilter correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call setPositionsTextFilter prop on text input change', () => {
        const value = 'added text';
        const eventMock = { target: { value } };

        wrapper.find('input').simulate('change', eventMock);

        expect(setPositionsTextFilter).toHaveBeenLastCalledWith(value);
    });
});
