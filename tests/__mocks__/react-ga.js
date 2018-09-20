const ReactGA = require.requireActual('react-ga');

const checkAndSetMock = (checkedObject) => {
    let mockedObject;
    if (checkedObject) {
        mockedObject = jest.fn();
    }
    return mockedObject;
};

const { initialize, event, modalview, pageview, } = ReactGA;

const mockReactGA = {
    initialize: checkAndSetMock(initialize),
    event: checkAndSetMock(event),
    modalview: checkAndSetMock(modalview),
    pageview: checkAndSetMock(pageview),
}

export default mockReactGA;
