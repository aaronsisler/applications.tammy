import { firebase, googleAuthProvider } from '../firebase/firebase';
import { history } from 'Tools/history';

export const startLogin = (redirectUrl = '/dashboard') => () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(() => {
            history.push(redirectUrl);
        })
}

export const startLogout = () => () => firebase.auth().signOut()
    .then(() => history.push('/logged_out'));
