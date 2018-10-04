import database from 'Firebase/firebase';
import { addUserDocument, setUserDocuments } from 'Actions/helpers/userDocuments';

export const startSetUserDocuments = () => (dispatch, getState) => {
    const { uid: userId } = getState().auth;

    return database.ref(`user_documents/${userId}`).once('value').then((snapshot) => {
        const userDocuments = [];
        snapshot.forEach((childSnapshot) => {
            userDocuments.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        dispatch(setUserDocuments(userDocuments));
    });
};

export const startAddUserDocument = (userDocument) => (dispatch, getState) => {
    const { uid: userId } = getState().auth;
    const { documentName, downloadUrl } = userDocument;
    const dateUploaded = new Date().toLocaleString();
    const uploadedDocument = { documentName, downloadUrl, dateUploaded }

    return database.ref(`user_documents/${userId}`)
        .push(uploadedDocument)
        .then((ref) => {
            dispatch(addUserDocument({
                id: ref.key,
                ...uploadedDocument
            }))
        });
}
