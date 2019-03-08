const downloadUrl = 'mockDownloadUrl';

const initializeApp = jest.fn();

const auth = jest.fn();
auth.GoogleAuthProvider = jest.fn(() => { });

const databaseRef = jest.fn();
const database = jest.fn().mockImplementation(() => ({ ref: databaseRef }));

const storageRef = jest.fn().mockImplementation(() => ({ child: () => ({ getDownloadURL: jest.fn().mockReturnValue(downloadUrl) }) }));
const storage = jest.fn().mockImplementation(() => ({ ref: storageRef }));

export { auth, database, initializeApp, storage };
