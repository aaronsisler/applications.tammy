import { setPosition, clearPosition } from './helpers/position';

export const startSetPosition = (positionId) => (dispatch, getState) => {
    const { positions } = getState();
    const positionMatch = positions.find((position) => position.positionId == positionId);
    return dispatch(setPosition(positionMatch));
}

export const startClearPosition = () => (dispatch) => dispatch(clearPosition())
