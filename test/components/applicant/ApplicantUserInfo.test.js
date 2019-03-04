import React from 'react';
import { shallow } from 'enzyme';
import ApplicantUserInfo from 'Applicant/ApplicantUserInfo';
import user from '../../fixtures/user';

describe('ApplicantUserInfo', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ApplicantUserInfo
                user={user}
            />
        );
    })

    it('should render ApplicantUserInfo correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
