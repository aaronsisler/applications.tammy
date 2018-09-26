const firebase = require.requireActual('firebase');
const fbStorage = require.requireActual('firebase/storage');

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

const storage = fbStorage ? jest.fn() : undefined;

export {
    auth,
    database,
    initializeApp,
    storage
}
