import React from 'react';
import { shallow } from 'enzyme';
import ApplicantUserDocuments from 'Applicant/ApplicantUserDocuments';
import userDocuments from '../../fixtures/userDocuments';

describe('ApplicantUserDocuments', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ApplicantUserDocuments
                userDocuments={userDocuments}
            />
        );
    })

    it('should render ApplicantUserDocuments correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
