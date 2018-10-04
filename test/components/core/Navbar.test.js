import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from 'Core/Navbar';
import {
    bodyAddMock,
    bodyRemoveMock,
    getElementByIdClassListMock,
} from '../../__mocks__/document';

describe('Navbar', () => {
    const startClearUser = jest.fn();
    const startLogout = jest.fn();
    const bodyOpenClassName = 'body_open';
    const navSideMenuOpenClassName = 'nav_side_menu_open';
    const navSideMenu = 'nav_side_menu';
    let wrapper;
    let instance;

    beforeEach(() => {
        // console.log('beforeEach main');
        wrapper = shallow(
            <Navbar
                isAuthenticated={true}
                startClearUser={startClearUser}
                startLogout={startLogout}
            />);
        instance = wrapper.instance();
    });

    afterEach(() => {
        // console.log('Restore mocks');
        jest.restoreAllMocks();
    });

    it('should have isNavOpen set to false on initialization', () => {
        expect(wrapper.state('isNavOpen')).toBe(false);
    });

    describe('favicons', () => {
        beforeEach(() => {
            // console.log('beforeEach spyOn');
            jest.spyOn(instance, 'handleOpenSideMenu').mockImplementation(jest.fn());
            jest.spyOn(instance, 'handleCloseSideMenu').mockImplementation(jest.fn());
        });

        describe('times icon', () => {
            it('should show if isNavOpen is TRUE', () => {
                wrapper.setState({ isNavOpen: true });
                expect(wrapper.state('isNavOpen')).toBe(true);
                expect(wrapper.find('.nav_toggles').children().prop('icon').iconName).toBe('times');
            });

            it('should call handleCloseSideMenu when clicked', () => {
                wrapper.setState({ isNavOpen: true });
                expect(wrapper.state('isNavOpen')).toBe(true);
                wrapper.find('.navbar_favicon').simulate('click');
                expect(instance.handleCloseSideMenu).toHaveBeenCalled();
            });
        });

        describe('bars icon', () => {
            it('should show if isNavOpen is FALSE', () => {
                expect(wrapper.state('isNavOpen')).toBe(false);
                expect(wrapper.find('.nav_toggles').children().prop('icon').iconName).toBe('bars');
            });

            xit('should call handleOpenSideMenu when clicked', () => {
                // console.log('In test');
                expect(wrapper.state('isNavOpen')).toBe(false);
                expect(wrapper.find('.navbar_favicon')).toHaveLength(1);
                // console.log('After first 2 expects');
                wrapper.find('.navbar_favicon').simulate('click');
                expect(instance.handleOpenSideMenu).toHaveBeenCalled();
                // console.log('End of test');
            });
        });
    });

    describe('handleOpenSideMenu() method', () => {
        beforeEach(() => {
            jest.spyOn(document.body.classList, 'add').mockImplementation(bodyAddMock);
            jest.spyOn(document, 'getElementById').mockReturnValue(getElementByIdClassListMock);
        });

        it('should add classname to body classlist', () => {
            instance.handleOpenSideMenu();
            expect(bodyAddMock).toHaveBeenLastCalledWith(bodyOpenClassName);
            expect(document.body.classList.add).toHaveBeenLastCalledWith(bodyOpenClassName);
        });

        it(`should add classname to nav side menu element's classlist`, () => {
            instance.handleOpenSideMenu();
            expect(document.getElementById).toHaveBeenLastCalledWith(navSideMenu);
            expect(document.getElementById(navSideMenu).classList.add).toHaveBeenLastCalledWith(navSideMenuOpenClassName);
        });

        it('should set isNavOpen in state to true', () => {
            instance.handleOpenSideMenu();
            expect(wrapper.state('isNavOpen')).toBe(true);
        });
    })

    describe('handleCloseSideMenu() method', () => {
        beforeEach(() => {
            jest.spyOn(document.body.classList, 'remove').mockImplementation(bodyRemoveMock);
            jest.spyOn(document, 'getElementById').mockReturnValue(getElementByIdClassListMock);
        });

        it('should remove classname to body classlist', () => {
            instance.handleCloseSideMenu();
            expect(bodyRemoveMock).toHaveBeenLastCalledWith(bodyOpenClassName);
            expect(document.body.classList.remove).toHaveBeenLastCalledWith(bodyOpenClassName);
        });

        it(`should remove classname to nav side menu element's classlist`, () => {
            instance.handleCloseSideMenu();
            expect(document.getElementById).toHaveBeenLastCalledWith(navSideMenu);
            expect(document.getElementById(navSideMenu).classList.remove)
                .toHaveBeenLastCalledWith(navSideMenuOpenClassName);
        });

        it('should set isNavOpen in state to false', () => {
            expect(wrapper.state('isNavOpen')).toBe(false);
            wrapper.setState({ isNavOpen: true });
            expect(wrapper.state('isNavOpen')).toBe(true);
            instance.handleCloseSideMenu();
            expect(wrapper.state('isNavOpen')).toBe(false);
        });
    })

    describe('when user is authenticated', () => {
        it('should render Navbar correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });

        describe('handleLogout() method', () => {
            beforeEach(() => {
                jest.spyOn(instance, 'handleOpenSideMenu').mockImplementation(jest.fn());
                jest.spyOn(instance, 'handleCloseSideMenu').mockImplementation(jest.fn());
            })

            it('should call handleCloseSideMenu', () => {
                wrapper.find('button').simulate('click');

                expect(instance.handleCloseSideMenu).toHaveBeenCalled();
            })

            it('should call startClearUser', () => {
                wrapper.find('button').simulate('click');

                expect(startClearUser).toHaveBeenCalled();
            })

            it('should call startLogout', () => {
                wrapper.find('button').simulate('click');

                expect(startLogout).toHaveBeenCalled();
            })
        })
    })

    describe('when user is NOT authenticated', () => {
        beforeEach(() => {
            wrapper = shallow(
                <Navbar
                    isAuthenticated={false}
                    startClearUser={startClearUser}
                    startLogout={startLogout}
                />)
        });

        it('should render Navbar correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    })
})
