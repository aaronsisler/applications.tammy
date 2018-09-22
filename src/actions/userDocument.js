import { storage } from '../firebase/firebase';

export const startSetUserDocuments = (userId) => () => {
    // await storage.createBucket(userId);
    console.log('Storage', storage);
    // console.log('Storage', storage.createBucket);

    // storage.getBuckets().
    // storage.bucket(userId).
    //     then((bucket) => {
    //         console.log(`User Id`, userId);
    //         console.log(`Bucket Stuff`, bucket);
    //     })
    //     .catch((error) => {
    //         console.log(`Bucket Error`, error);
    //     });
}
    // database.ref(`user_documents/${id}`).once('value').then((snapshot) => {
    //     const documents = [];
    //     snapshot.forEach((childSnapshot) => {
    //         const userDocument = {
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         }
    //         documents.push(userDocument);
    //     });

    //     dispatch(setUserDocuments(documents));
    // });
