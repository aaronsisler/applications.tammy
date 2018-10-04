import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from '../../src/routers/AppRouter';

import ApplicationPage from 'Application/ApplicationPage';
import DashboardPage from 'Core/DashboardPage';
import LoggedOutPage from 'Core/LoggedOutPage';
import LoginPage from 'Core/LoginPage';
import NotFoundPage from 'Core/NotFoundPage';
import PositionsPage from 'Position/PositionsPage';
import UserDocumentsPage from 'User/UserDocumentsPage';
import UserProfilePage from 'User/UserProfilePage';

import history from 'Tools/history';

describe('AppRouter', () => {
    let wrapper;
    let routes;

    const buildWrapper = (isAuthenticated = false) => {
        wrapper = shallow(
            <AppRouter
                isAuthenticated={isAuthenticated}
            />);
    };

    const queryRouteComponents = (path, component) => {
        let matchFound;

        routes.forEach(route => {
            if (route.prop('path') === path && route.prop('component') === component) {
                matchFound = true;
                return;
            }
        });
        return matchFound;
    }

    beforeEach(() => {
        buildWrapper();
    });

    it('should pass history as a prop to the Router', () => {
        expect(wrapper.find('Router').prop('history')).toEqual(history);
    })

    it('should render a Navbar', () => {
        expect(wrapper.find('Connect(Navbar)').length).toBe(1);
    });

    it('should pass user is authenticated to Navbar', () => {
        expect(wrapper.find('Connect(Navbar)').prop('isAuthenticated')).toBe(false);
        buildWrapper(true);
        expect(wrapper.find('Connect(Navbar)').prop('isAuthenticated')).toBe(true);
    });

    it('should render a Footer', () => {
        expect(wrapper.find('Footer').length).toBe(1);
    });

    describe('Route Navigation', () => {
        beforeEach(() => {
            routes = wrapper.find('Route');
        });

        it('should render ApplicationPage when at the /apply route', () => {
            const matchFound = queryRouteComponents('/apply', ApplicationPage);
            expect(matchFound).toBe(true);
        });

        it('should render DashboardPage when at the /dashboard route', () => {
            const matchFound = queryRouteComponents('/dashboard', DashboardPage);
            expect(matchFound).toBe(true);
        });

        it('should render LoggedOutPage when at the /logged_out route', () => {
            const matchFound = queryRouteComponents('/logged_out', LoggedOutPage);
            expect(matchFound).toBe(true);
        });

        it('should render LoginPage when at the /login route', () => {
            const matchFound = queryRouteComponents('/login', LoginPage);
            expect(matchFound).toBe(true);
        });

        it('should render NotFoundPage when no matching route found', () => {
            const matchFound = queryRouteComponents(undefined, NotFoundPage);
            expect(matchFound).toBe(true);
        });

        it('should render PositionsPage when at the root route', () => {
            const matchFound = queryRouteComponents('/', PositionsPage);
            expect(matchFound).toBe(true);
        });

        it('should render UserDocumentsPage when at the /user_documents route', () => {
            const matchFound = queryRouteComponents('/user_documents', UserDocumentsPage);
            expect(matchFound).toBe(true);
        });

        it('should render UserProfilePage when at the /user_profile route', () => {
            const matchFound = queryRouteComponents('/user_profile', UserProfilePage);
            expect(matchFound).toBe(true);
        });
    })
});
