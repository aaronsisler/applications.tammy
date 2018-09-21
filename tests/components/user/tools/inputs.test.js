import { errorInputFieldClassName } from 'Tools/constants';
import { getElementsByNameClassListMock } from '../../../__mocks__/document';
import InputTools from 'User/tools/inputs';

describe('User Tool Inputs', () => {
    let inputTools;

    beforeEach(() => {
        inputTools = new InputTools();
        jest.spyOn(document, 'getElementsByName')
            .mockReturnValue(getElementsByNameClassListMock);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });


    describe('handleRequiredValidation() method', () => {
        let eventMock;

        beforeEach(() => {
            eventMock = { target: {} };
            jest.spyOn(inputTools, 'handleSetErrorClassname')
        });

        describe('when input value is present', () => {
            it('should remove required input className from input element', () => {
                const name = 'mockInputName';
                const value = 'mockInputValue';
                eventMock.target = { name, value, };

                inputTools.handleRequiredValidation(eventMock);

                expect(inputTools.handleSetErrorClassname)
                    .toHaveBeenLastCalledWith(name);
            });
        });

        describe('when input value is NOT present', () => {
            it('should add required input className to input element', () => {
                const name = 'mockInputName';
                eventMock.target = { name, };

                inputTools.handleRequiredValidation(eventMock);

                expect(inputTools.handleSetErrorClassname)
                    .toHaveBeenLastCalledWith(name, false);
            });
        });
    });

    describe('handleSetErrorClassname', () => {
        describe('when isInputValid is true', () => {
            it('should remove required input className from input element', () => {
                const name = 'mockInputName';

                inputTools.handleSetErrorClassname(name);

                expect(document.getElementsByName).toHaveBeenLastCalledWith(name);
                expect(document.getElementsByName(name)[0].classList.remove)
                    .toHaveBeenLastCalledWith(errorInputFieldClassName);
            });
        });

        describe('when isInputValid is false', () => {
            it('should add required input className to input element', () => {
                const name = 'mockInputName';

                inputTools.handleSetErrorClassname(name, false);

                expect(document.getElementsByName).toHaveBeenLastCalledWith(name);
                expect(document.getElementsByName(name)[0].classList.add)
                    .toHaveBeenLastCalledWith(errorInputFieldClassName);
            });
        });
    });
});
