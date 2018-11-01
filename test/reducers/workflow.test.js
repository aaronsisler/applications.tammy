import workflowReducer from 'Reducers/workflow';
import {
    clearWorkflowPosition,
    setWorkflowPosition,
} from 'Actions/helpers/workflow';
import positions from '../fixtures/positions';


describe('workflow reducer', () => {
    const defaultState = { position: null };
    const [position] = positions;

    it('should setup default state', () => {
        const action = {
            type: '@@INIT',
        }

        const state = workflowReducer(undefined, action);

        expect(state).toEqual(defaultState);
    });

    it('should clear the workflow position', () => {
        const action = clearWorkflowPosition();

        const state = workflowReducer({ position }, action);

        expect(state).toEqual(defaultState);
    });

    it('should set the workflow position', () => {
        const action = setWorkflowPosition(position);

        const state = workflowReducer(undefined, action);

        expect(state).toEqual({ position });
    });
})
