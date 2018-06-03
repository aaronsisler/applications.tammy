import { firebase, googleAuthProvider } from '../firebase/firebase';
import { history } from '../tools/history';

export const login = uid => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (redirectUrl = '/dashboard') => () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(() => {
            history.push(redirectUrl);
        })
}

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => () => firebase.auth().signOut().then(() => history.push('/logged_out'));
