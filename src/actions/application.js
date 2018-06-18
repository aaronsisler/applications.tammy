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

export const addApplicationUserDocument = (userDocument) => ({
    type: 'ADD_APPLICATION_USER_DOCUMENT',
    userDocument
});

export const startAddApplicationUserDocument = (userDocumentId) => (dispatch, getState) => {
    const { userDocuments } = getState();
    const userDocumentMatch = userDocuments.find((userDocument) => userDocument.id == userDocumentId)
    dispatch(addApplicationUserDocument(userDocumentMatch))
}


export const clearApplicationUserDocuments = () => ({
    type: 'CLEAR_APPLICATION_USER_DOCUMENTS',
    userDocuments: []
});

export const startClearApplicationUserDocuments = () => (dispatch) => {
    dispatch(clearApplicationUserDocuments())
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


