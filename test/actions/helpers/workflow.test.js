import {
    clearWorkflowPosition,
    setWorkflowPosition
} from 'Actions/helpers/workflow';
import positions from '../../fixtures/positions';

describe('Workflow Action Helpers', () => {
    describe('clearWorkflowPosition() method', () => {
        it(`should setup 'clear workflow position' action object`, () => {
            const action = clearWorkflowPosition();

            expect(action).toEqual({
                type: 'CLEAR_WORKFLOW_POSITION',
            });
        });
    });

    describe('setWorkflowPosition() method', () => {
        it(`should setup 'set workflow position' action object`, () => {
            const [position] = positions;
            const action = setWorkflowPosition(position);

            expect(action).toEqual({
                type: 'SET_WORKFLOW_POSITION',
                position
            });
        });
    });
});
