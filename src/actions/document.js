import database from '../firebase/firebase';

export const setDocuments = (documents) => ({
    type: 'SET_DOCUMENTS',
    documents
});

export const startSetDocuments = (id) => (dispatch) =>
    database.ref(`users/${id}/documents`).once('value').then((snapshot) => {
        const documents = [];
        snapshot.forEach((childSnapshot) => {
            const thing = {
                id: childSnapshot.key,
                ...childSnapshot.val()
            }
            documents.push(thing);
        });

        dispatch(setDocuments(documents));
    });

export const addDocument = (document) => ({
    type: 'ADD_DOCUMENT',
    document
});

export const startAddDocument = (userId, userDocument) => (dispatch) => {
    const { documentName, downloadURL } = userDocument;
    const dateUploaded = new Date().toLocaleString();
    const uploadedDocument = { documentName, downloadURL, dateUploaded }
    database.ref(`users/${userId}/documents`)
        .push(uploadedDocument)
        .then((ref) => {
            dispatch(addDocument({
                id: ref.key,
                ...uploadedDocument
            }))
        });
}
