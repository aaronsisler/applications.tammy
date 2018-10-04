
import React from 'react';
import { shallow } from 'enzyme';
import { UserProfileContainer } from 'User/UserProfileContainer';
import user from '../../fixtures/user';

describe('UserProfileContainer', () => {
    const startEditUser = jest.fn();
    let wrapper;

    const buildWrapper = (isReadOnly, inputUser) => {
        wrapper = shallow(
            <UserProfileContainer
                isReadOnly={isReadOnly}
                startEditUser={startEditUser}
                user={inputUser}
            />);
    }

    describe('when user is defined', () => {
        beforeEach(() => {
            buildWrapper(false, user);
        });

        it('should render UserProfileContainer correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('startEditUser() prop', () => {
            it('should be called for UserNameWidget`s onSubmit prop', () => {
                wrapper.find('#UserNameWidget').prop('onSubmit')(user);

                expect(startEditUser).toHaveBeenLastCalledWith(user);
            });

            it('should be passed as UserContactInfoWidget`s onSubmit prop', () => {
                wrapper.find('#UserContactInfoWidget').prop('onSubmit')(user);

                expect(startEditUser).toHaveBeenLastCalledWith(user);
            });

            it('should be passed as UserAddressWidget`s onSubmit prop', () => {
                wrapper.find('#UserAddressWidget').prop('onSubmit')(user);

                expect(startEditUser).toHaveBeenLastCalledWith(user);
            });
        });
    });

    describe('when user is undefined', () => {
        beforeEach(() => {
            buildWrapper(false, undefined);
        });

        it('should render UserProfileContainer correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
