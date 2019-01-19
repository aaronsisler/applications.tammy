import {
    decrementCurrentStep,
    incrementCurrentStep,
    resetApplicationProcess,
} from 'Actions/helpers/applicationProcess';

describe('Application Process Action Helpers', () => {
    describe('decrementCurrentStep() method', () => {
        it(`should setup 'decrement current step' action object`, () => {
            const action = decrementCurrentStep();

            expect(action).toEqual({
                type: 'DECREMENT_CURRENT_STEP',
            });
        });
    });

    describe('incrementCurrentStep() method', () => {
        it(`should setup 'increment current step' action object`, () => {
            const action = incrementCurrentStep();

            expect(action).toEqual({
                type: 'INCREMENT_CURRENT_STEP',
            });
        });
    });

    describe('resetApplicationProcess() method', () => {
        it(`should setup 'reset application process' action object`, () => {
            const action = resetApplicationProcess();

            expect(action).toEqual({
                type: 'RESET_APPLICATION_PROCESS',
            });
        });
    });
});
