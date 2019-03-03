import React from 'react';
import { shallow } from 'enzyme';
import LinkWrapper from 'Universal/LinkWrapper';

describe('LinkWrapper', () => {
    const mockLinkText = 'mock link text';
    const onClickMock = jest.fn();
    const to = 'to location';
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <LinkWrapper
                linkText={mockLinkText}
                onClick={onClickMock}
                to={to}
            />
        );
    })

    it('should render LinkWrapper correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call the onClick prop when clicked', () => {
        wrapper.find('.link_wrapper').simulate('click');

        expect(onClickMock).toHaveBeenCalled();
    });
});
