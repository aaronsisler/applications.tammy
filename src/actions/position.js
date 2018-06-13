export const setPosition = (position) => ({
    type: 'SET_POSITION',
    position
});

export const startSetPosition = id => (dispatch, getState) => {
    const { positions } = getState();
    const positionMatch = positions.find((position) => position.id == id);
    return dispatch(setPosition(positionMatch));
}
