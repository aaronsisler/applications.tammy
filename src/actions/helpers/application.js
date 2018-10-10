export const addApplicationUserDocument = (userDocument) => ({
    type: 'ADD_APPLICATION_USER_DOCUMENT',
    userDocument
});

export const clearApplication = () => ({
    type: 'CLEAR_APPLICATION'
});

export const removeApplicationUserDocument = (userDocumentId) => ({
    type: 'REMOVE_APPLICATION_USER_DOCUMENT',
    userDocumentId
});

export const setApplicationUser = (user) => ({
    type: 'SET_APPLICATION_USER',
    user
});
