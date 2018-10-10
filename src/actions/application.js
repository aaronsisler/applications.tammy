import { clearApplication, setApplicationUser } from 'Actions/helpers/application';

export const startClearApplication = () => (dispatch) => {
    dispatch(clearApplication())
}

export const startSetApplicationUser = () => (dispatch, getState) => {
    const { user } = getState();
    dispatch(setApplicationUser(user));
}
