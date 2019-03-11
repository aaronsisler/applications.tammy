import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from '../../src/routers/AppRouter';

import ApplicantsPage from 'Applicant/ApplicantsPage';
import ApplicationPage from 'Application/ApplicationPage';
import DashboardPage from 'Core/DashboardPage';
import LoggedOutPage from 'Core/LoggedOutPage';
import LoginPage from 'Core/LoginPage';
import NotFoundPage from 'Core/NotFoundPage';
import PositionsPage from 'Position/PositionsPage';
import PositionsWatchAddPage from 'PositionWatch/PositionsWatchAddPage';
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

    describe('Route Navigation', () => {
        beforeEach(() => {
            routes = wrapper.find('Route');
        });

        it('should render ApplicantsPage when at the /applicants/positionId route', () => {
            const matchFound = queryRouteComponents('/applicants/:positionId', ApplicantsPage);
            expect(matchFound).toBe(true);
        });

        it('should render ApplicantsPage when at the /applicants/positionId/applicantId route', () => {
            const matchFound = queryRouteComponents('/applicants/:positionId/:applicantId', ApplicantsPage);
            expect(matchFound).toBe(true);
        });

        it('should render ApplicationPage when at the /apply/positionId route', () => {
            const matchFound = queryRouteComponents('/apply/:positionId', ApplicationPage);
            expect(matchFound).toBe(true);
        });

        it('should render DashboardPage when at the /dashboard route', () => {
            const matchFound = queryRouteComponents('/dashboard', DashboardPage);
            expect(matchFound).toBe(true);
        });

        it('should render DashboardPage when at the /dashboard/positionId route', () => {
            const matchFound = queryRouteComponents('/dashboard/:positionId', DashboardPage);
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

        it('should render PositionsPage when at the /positions route', () => {
            const matchFound = queryRouteComponents('/positions', PositionsPage);
            expect(matchFound).toBe(true);
        });

        it('should render PositionsPage when at the /positions/positionId route', () => {
            const matchFound = queryRouteComponents('/positions/:positionId', PositionsPage);
            expect(matchFound).toBe(true);
        });

        it('should render PositionsWatchAddPage when at the /position_watch_add route', () => {
            const matchFound = queryRouteComponents('/position_watch_add', PositionsWatchAddPage);
            expect(matchFound).toBe(true);
        });

        it('should render PositionsWatchAddPage when at the /position_watch_add/positionId route', () => {
            const matchFound = queryRouteComponents('/position_watch_add/:positionId', PositionsWatchAddPage);
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

        it('should render NotFoundPage when at the /not_found route', () => {
            const matchFound = queryRouteComponents('/not_found', NotFoundPage);
            expect(matchFound).toBe(true);
        });

        it('should render NotFoundPage when no matching route found', () => {
            const matchFound = queryRouteComponents(undefined, NotFoundPage);
            expect(matchFound).toBe(true);
        });
    })
});
