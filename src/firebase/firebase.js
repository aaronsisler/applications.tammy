import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: 'AIzaSyB1Usq_JhrJRmTKaHVjNMe5xzRmqT_U49E',
    authDomain: 'tammy-in-hr.firebaseapp.com',
    databaseURL: 'https://tammy-in-hr.firebaseio.com',
    messagingSenderId: '750914882179',
    projectId: 'tammy-in-hr',
    storageBucket: 'tammy-in-hr.appspot.com',
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {
    database as default,
    firebase,
    googleAuthProvider,
    storage,
};
