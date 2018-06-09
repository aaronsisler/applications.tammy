export const setPosition = (position) => ({
    type: 'SET_POSITION',
    position
});

export const startSetPosition = id => (dispatch, getState) => {
    const { positions } = getState();
    const position = positions[id];
    return dispatch(setPosition(position));
}
