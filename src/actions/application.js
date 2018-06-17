import database from '../firebase/firebase';

export const setApplicationUser = (user) => ({
    type: 'SET_APPLICATION_USER',
    user
});

export const startSetApplicationUser = () => (dispatch, getState) => {
    const { user } = getState();
    dispatch(setApplicationUser(user));
}

export const clearApplicationUser = () => ({
    type: 'CLEAR_APPLICATION_USER',
    user: {}
});

export const startClearApplicationUser = () => (dispatch) => {
    dispatch(clearApplicationUser({}));
}

export const setApplicationUserDocuments = (userDocuments) => ({
    type: 'SET_APPLICATION_USER_DOCUMENTS',
    userDocuments
});

export const startSetApplicationUserDocuments = () => (dispatch, getState) => {
    const { userDocuments } = getState();
    dispatch(setApplicationUserDocuments(userDocuments))
}


export const clearApplicationUserDocuments = () => ({
    type: 'CLEAR_APPLICATION_USER_DOCUMENTS',
    userDocuments: []
});

export const startClearApplicationUserDocuments = () => (dispatch) => {
    dispatch(setApplicationUserDocuments({}))
}

export const submitApplication = () => ({
    type: 'SUBMIT_APPLICATION'
});

export const startSubmitApplication = () => (dispatch, getState) => {
    const { user, userDocuments } = getState().application;
    const { id: positionId } = getState().position;
    database.ref(`applications/${positionId}`).push({
        user,
        userDocuments
    }).then(() => dispatch(submitApplication()));
}

export const clearApplication = () => ({
    type: 'CLEAR_APPLICATION',
    user: {},
    userDocuments: []
});

export const startClearApplication = () => (dispatch) => {
    dispatch(clearApplication())
}


