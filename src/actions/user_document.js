import database from '../firebase/firebase';

export const setUserDocuments = (documents) => ({
    type: 'SET_USER_DOCUMENTS',
    documents
});

export const startSetUserDocuments = (id) => (dispatch) =>
    database.ref(`user_documents/${id}`).once('value').then((snapshot) => {
        const documents = [];
        snapshot.forEach((childSnapshot) => {
            const thing = {
                id: childSnapshot.key,
                ...childSnapshot.val()
            }
            documents.push(thing);
        });

        dispatch(setUserDocuments(documents));
    });

export const addUserDocument = (document) => ({
    type: 'ADD_USER_DOCUMENT',
    document
});

export const startAddUserDocument = (userId, userDocument) => (dispatch) => {
    const { documentName, downloadURL } = userDocument;
    const dateUploaded = new Date().toLocaleString();
    const uploadedDocument = { documentName, downloadURL, dateUploaded }
    database.ref(`user_documents/${userId}`)
        .push(uploadedDocument)
        .then((ref) => {
            dispatch(addUserDocument({
                id: ref.key,
                ...uploadedDocument
            }))
        });
}
