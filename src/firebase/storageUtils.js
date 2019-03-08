import { storage } from 'Firebase/firebase';

const retrieveDownloadUrl = (storagePath, documentName) =>
    storage.ref(storagePath).child(documentName).getDownloadURL()

export {
    retrieveDownloadUrl,
};
