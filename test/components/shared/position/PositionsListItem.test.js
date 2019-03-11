import React from 'react';
import { shallow } from 'enzyme';
import { PositionsListItem } from 'Shared/position/PositionsListItem';
import { position } from '../../../fixtures/positions';

import history from 'Tools/history';
jest.mock('Tools/history');

describe('PositionsListItem', () => {
    let wrapper;
    const push = jest.fn();
    const linkRoute = 'fakeRoute';

    const { jobId, location, positionId, title } = position;

    beforeEach(() => {
        history.push = push;
        wrapper = shallow(
            <PositionsListItem
                jobId={jobId}
                linkRoute={linkRoute}
                location={location}
                positionId={positionId}
                title={title}
            />);
    });

    it('should render PositionsListItem correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should navigate to correct route on click', () => {
        wrapper.find('.positions_list_item').simulate('click');

        expect(push).toHaveBeenLastCalledWith(`/${linkRoute}/${positionId}`);
    });
});
