import React from 'react';
import { shallow } from 'enzyme';
import { PositionsListFilter } from 'Position/PositionsListFilter';

describe('PositionsListFilter', () => {
    const setPositionsTextFilter = jest.fn();
    const filters = { text: 'initial filter' };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <PositionsListFilter
                filters={filters}
                setPositionsTextFilter={setPositionsTextFilter}
            />
        );
    })

    it('should render PositionsListFilter correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call setPositionsTextFilter prop on text input change', () => {
        const value = 'added text';
        const eventMock = { target: { value } };

        wrapper.find('input').simulate('change', eventMock);

        expect(setPositionsTextFilter).toHaveBeenLastCalledWith(value);
    });
});
