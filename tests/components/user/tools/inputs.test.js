import { requiredInputFieldClassName } from 'Tools/constants';
import { getElementsByNameClassListMock } from '../../../__mocks__/document';
import InputTools from 'User/tools/inputs';

describe('User Tool Inputs', () => {
    describe('handleRequiredValidation() method', () => {
        let eventMock;
        let inputTools;

        beforeEach(() => {
            eventMock = { target: {} };
            inputTools = new InputTools();
            jest.spyOn(document, 'getElementsByName')
                .mockReturnValue(getElementsByNameClassListMock);
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        describe('when input value is present', () => {
            it('should remove required input className to input element', () => {
                const name = 'mockInputName';
                const value = 'mockInputValue';
                eventMock.target = { name, value, };

                inputTools.handleRequiredValidation(eventMock);

                expect(document.getElementsByName).toHaveBeenLastCalledWith(name);
                expect(document.getElementsByName(name)[0].classList.remove)
                    .toHaveBeenLastCalledWith(requiredInputFieldClassName);
            });
        });

        describe('when input value is NOT present', () => {
            it('should add required input className to input element', () => {
                const name = 'mockInputName';
                eventMock.target = { name, };

                inputTools.handleRequiredValidation(eventMock);

                expect(document.getElementsByName).toHaveBeenLastCalledWith(name);
                expect(document.getElementsByName(name)[0].classList.add)
                    .toHaveBeenLastCalledWith(requiredInputFieldClassName);
            });
        })
    })
})
