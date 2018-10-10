import {
    addApplicationUserDocument,
    clearApplication,
    removeApplicationUserDocument,
    setApplicationUser,
} from 'Actions/helpers/application';

export const startClearApplication = () => (dispatch) => {
    dispatch(clearApplication())
}

export const startSetApplicationUser = () => (dispatch, getState) => {
    const { user } = getState();
    dispatch(setApplicationUser(user));
}

export const startAddApplicationUserDocument = (userDocumentId) => (dispatch, getState) => {
    const { userDocuments } = getState();
    const userDocumentMatch = userDocuments.find((userDocument) => userDocument.id == userDocumentId)
    dispatch(addApplicationUserDocument(userDocumentMatch))
}

export const startRemoveApplicationUserDocument = (userDocumentId) => (dispatch) => {
    dispatch(removeApplicationUserDocument(userDocumentId))
}
