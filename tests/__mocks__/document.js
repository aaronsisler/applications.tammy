const getElementsByNameAddMock = jest.fn();
const getElementsByNameRemoveMock = jest.fn();
const getElementsByNameClassListMock = [{
    classList: {
        add: getElementsByNameAddMock,
        remove: getElementsByNameRemoveMock,
    }
}]

/*
    jest.spyOn(document, 'getElementsByName')
        .mockReturnValue(getElementsByNameClassListMock);
*/
const getElementByIdAddMock = jest.fn();
const getElementByIdRemoveMock = jest.fn();
const getElementByIdClassListMock = {
    classList: {
        add: getElementByIdAddMock,
        remove: getElementByIdRemoveMock,
    }
};

/*
    jest.spyOn(document, 'getElementById')
        .mockReturnValue(getElementByIdClassListMock);
*/

const bodyAddMock = jest.fn();

/*
    jest.spyOn(document.body.classList, 'add')
        .mockImplementation(bodyAddMock);
*/

const bodyRemoveMock = jest.fn();

/*
    jest.spyOn(document.body.classList, 'remove')
        .mockImplementation(bodyRemoveMock);
*/

export {
    bodyAddMock,
    bodyRemoveMock,
    getElementByIdClassListMock,
    getElementsByNameClassListMock,
}
