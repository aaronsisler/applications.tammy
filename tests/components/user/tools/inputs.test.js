import { requiredInputFieldClassName } from '../../../../src/tools/constants';
import { handleRequiredValidation } from '../../../../src/components/user/tools/inputs';
import { getElementsByNameClassListMock } from '../../../__mocks__/document';

describe('User Tool Inputs', () => {
    describe('handleRequiredValidation() method', () => {
        let eventMock;

        beforeEach(() => {
            eventMock = { target: {} };
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

                handleRequiredValidation(eventMock);

                expect(document.getElementsByName).toHaveBeenLastCalledWith(name);
                expect(document.getElementsByName(name)[0].classList.remove)
                    .toHaveBeenLastCalledWith(requiredInputFieldClassName);
            });
        });

        describe('when input value is NOT present', () => {
            it('should add required input className to input element', () => {
                const name = 'mockInputName';
                eventMock.target = { name, };

                handleRequiredValidation(eventMock);

                expect(document.getElementsByName).toHaveBeenLastCalledWith(name);
                expect(document.getElementsByName(name)[0].classList.add)
                    .toHaveBeenLastCalledWith(requiredInputFieldClassName);
            });
        })
    })
})
