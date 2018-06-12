import database, { storage } from '../firebase/firebase';

export const setDocuments = (documents) => ({
    type: 'SET_DOCUMENTS',
    documents
});

export const startSetDocuments = (id) => (dispatch) =>
    database.ref(`users/${id}/documents`).once('value').then((snapshot) => {
        const documents = [];
        snapshot.forEach((childSnapshot) => {
            documents.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        dispatch(setDocuments(documents));
    });

export const addDocument = (document) => ({
    type: 'ADD_DOCUMENT',
    document
});

export const startAddDocument = (userId, document) => (dispatch) => {
    let downloadURL;
    const storageRef = storage.ref(`${userId}/${document.name}`);
    const getDownloadURL = () => storageRef.getDownloadURL().then(url => downloadURL = url);

    storageRef.put(document).then(() => getDownloadURL()).then(() =>
        database.ref(`${userId}/documents`)
            .update(
                {
                    fileName: document.name,
                    downloadURL,
                    dateUploaded: new Date().toLocaleString()
                })).then(() => {
                    dispatch(addDocument(document))
                });
}
