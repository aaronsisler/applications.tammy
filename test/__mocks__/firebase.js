const firebase = require.requireActual('firebase');

const onAuthStateChanged = jest.fn();

const auth = jest.spyOn(firebase, 'auth').mockImplementation(() => ({
    onAuthStateChanged,
}));

firebase.auth.GoogleAuthProvider = jest.fn(() => { })

const initializeApp = jest.spyOn(firebase, 'initializeApp')
    .mockImplementation(() => ({
        auth: () => ({})
    }));

const database = jest.spyOn(firebase, 'database').mockImplementation(() => ({ ref: jest.fn() }));

const getDownloadURL = jest.fn().mockReturnValue('mockDownloadUrl');
const child = jest.fn().mockImplementation(() => ({ getDownloadURL }));
const ref = jest.fn().mockImplementation(() => ({ child }))

const storage = jest.fn().mockImplementation(() => ({ ref }));

export {
    auth,
    database,
    initializeApp,
    storage,
}
