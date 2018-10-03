import { storage } from './firebase';

const uploadFile = async (storagePath, documentName) =>
    storage.ref(storagePath).child(documentName).getDownloadURL();

export default uploadFile;
