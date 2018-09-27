import database from '../firebase/firebase';
import { setUserDocuments } from 'Actions/helpers/userDocuments';

export const startSetUserDocuments = (userId) => (dispatch) =>
    database.ref(`user_documents/${userId}`).once('value').then((snapshot) => {
        const userDocuments = [];
        snapshot.forEach((childSnapshot) => {
            userDocuments.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        dispatch(setUserDocuments(userDocuments));
    })
