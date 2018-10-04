import { storage } from './firebase';

const retrieveDownloadUrl = async (storagePath, documentName) =>
    storage.ref(storagePath).child(documentName).getDownloadURL();

export {
    retrieveDownloadUrl,
};
