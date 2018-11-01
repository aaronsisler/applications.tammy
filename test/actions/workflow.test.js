import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
    startClearWorkflowPosition,
    startSetWorkflowPosition
} from 'Actions/workflow';
import * as workflowActionHelpers from 'Actions/helpers/workflow';
import positions from '../fixtures/positions';

const createMockStore = configureMockStore([thunk]);

describe('Workflow Actions', () => {
    const [position] = positions;
    let store;

    beforeEach(() => {
        store = createMockStore({ position });
    });

    describe('startClearWorkflowPosition() method', () => {
        it(`should call dispatch with clearPositon`, async () => {
            const clearWorkflowPositionMock = jest.spyOn(workflowActionHelpers, 'clearWorkflowPosition');

            await store.dispatch(startClearWorkflowPosition());

            expect(store.getActions().length).toBe(1);
            expect(clearWorkflowPositionMock).toHaveBeenCalled();
        });
    });

    describe('startSetWorkflowPosition() method', () => {
        it(`should call dispatch with setWorkflowPosition`, async () => {
            const setWorkflowPositionMock = jest.spyOn(workflowActionHelpers, 'setWorkflowPosition');

            await store.dispatch(startSetWorkflowPosition());

            expect(store.getActions().length).toBe(1);
            expect(setWorkflowPositionMock).toHaveBeenLastCalledWith(position);
        });
    });
});
