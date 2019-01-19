import { setPosition, clearPosition } from 'Actions/helpers/position';

export const startClearPosition = () => (dispatch) => dispatch(clearPosition());

export const startSetPosition = (positionId) => (dispatch, getState) => {
    const { positions } = getState();
    const positionMatch = positions.find((position) => position.positionId == positionId);
    return dispatch(setPosition(positionMatch));
}
