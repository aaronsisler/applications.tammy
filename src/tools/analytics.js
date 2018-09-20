import ReactGA from 'react-ga';
import { analyticsTrackingId } from '../config';

const eventTestObject = {
    category: 'Test Category',
    action: 'Test Action',
    label: 'Test Label',
};

export const initializeAnalytics = () => {
    ReactGA.initialize(analyticsTrackingId);
};

export const handleEvent = (event) => {
    ReactGA.event({
        ...event
    });
};

export const handleContainerView = (containerEvent) => handleEvent(containerEvent)

export const handleModalView = (modalDetail) => {
    ReactGA.modalview(modalDetail);
};

export const handlePageView = (pageUrl = window.location.pathname) => {
    ReactGA.pageview(pageUrl);
};

export const handleTestEvent = () => handleEvent(eventTestObject)
