import React from 'react';
import { shallow } from 'enzyme';
import { ApplicantsListFilter } from 'Applicant/ApplicantsListFilter';

describe('ApplicantsListFilter', () => {
    let wrapper;
    const startSetApplicantsTextFilter = jest.fn();
    const filters = { text: '' };

    beforeEach(() => {
        wrapper = shallow(
            <ApplicantsListFilter
                filters={filters}
                startSetApplicantsTextFilter={startSetApplicantsTextFilter}
            />
        );
    })

    it('should render ApplicantsListFilter correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call startSetApplicantsTextFilter prop on text input change', () => {
        const value = 'added text';
        const eventMock = { target: { value } };

        wrapper.find('input').simulate('change', eventMock);

        expect(startSetApplicantsTextFilter).toHaveBeenLastCalledWith(value);
    });
});
