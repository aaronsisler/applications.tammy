import ReactGA from 'react-ga';
// jest.mock('react-ga');
import {
    initializeAnalytics,
    handleContainerView,
    handleEvent,
    handleModalView,
    handlePageView,
    handleTestEvent,
} from 'Tools/analytics';
import { analyticsTrackingId } from 'Src/config';

describe('Tools Analytics', () => {
    const mockPath = '/mockPath';
    const mockObject = {
        category: 'Test Category',
        action: 'Test Action',
        label: 'Test Label',
    };

    describe('initializeAnalytics', () => {
        it('should call initialize with track id', () => {
            initializeAnalytics();

            expect(ReactGA.initialize).toHaveBeenLastCalledWith(analyticsTrackingId);
        });
    });

    describe('handleContainerView', () => {
        it('should call event with container event', () => {
            handleContainerView(mockObject);

            expect(ReactGA.event).toHaveBeenLastCalledWith(mockObject);
        });
    });

    describe('handleEvent', () => {
        it('should call event with event', () => {
            handleEvent(mockObject);

            expect(ReactGA.event).toHaveBeenLastCalledWith(mockObject);
        });
    });

    describe('handleModalView', () => {
        it('should call modalview with modal detail', () => {
            handleModalView(mockPath);

            expect(ReactGA.modalview).toHaveBeenLastCalledWith(mockPath);
        });
    });

    describe('handlePageView', () => {
        it('should call pageview with pageUrl', () => {
            handlePageView(mockPath);

            expect(ReactGA.pageview).toHaveBeenLastCalledWith(mockPath);
        });

        it('should call pageview with default url', () => {
            handlePageView();

            expect(ReactGA.pageview).toHaveBeenLastCalledWith(mockPath);
        });
    });

    describe('handleTestEvent', () => {
        it('should call event with event test object', () => {
            handleTestEvent();

            expect(ReactGA.event).toHaveBeenLastCalledWith(mockObject);
        });
    });
});
