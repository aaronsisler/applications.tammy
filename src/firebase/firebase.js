import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB1Usq_JhrJRmTKaHVjNMe5xzRmqT_U49E",
    authDomain: "tammy-in-hr.firebaseapp.com",
    databaseURL: "https://tammy-in-hr.firebaseio.com",
    projectId: "tammy-in-hr",
    storageBucket: "tammy-in-hr.appspot.com",
    messagingSenderId: "750914882179"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    database as default,
    firebase,
    googleAuthProvider,
};
