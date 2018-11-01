import {
    clearWorkflowPosition,
    setWorkflowPosition
} from 'Actions/helpers/workflow';

export const startClearWorkflowPosition = () => (dispatch) => dispatch(clearWorkflowPosition());

export const startSetWorkflowPosition = () => (dispatch, getState) => {
    const { position } = getState();
    return dispatch(setWorkflowPosition(position));
}
