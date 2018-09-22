import * as firebase from 'firebase';
import { Storage } from '@google-cloud/storage';

// const config = {
//     apiKey: 'AIzaSyB1Usq_JhrJRmTKaHVjNMe5xzRmqT_U49E',
//     authDomain: 'tammy-in-hr.firebaseapp.com',
//     databaseURL: 'https://tammy-in-hr.firebaseio.com',
//     messagingSenderId: '750914882179',
//     projectId: 'tammy-in-hr'
//     storageBucket: 'tammy-in-hr.appspot.com,
// };

const config = {
    type: "service_account",
    project_id: "tammy-in-hr",
    private_key_id: "bacb9a586e1657a0e8d85d8b23e0aaf31a6ce16a",
    private_key: 'tacoman',
    client_email: "admin-228@tammy-in-hr.iam.gserviceaccount.com",
    client_id: "115855429739170371492",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/admin-228%40tammy-in-hr.iam.gserviceaccount.com"
  }


// firebase.initializeApp(config);

// const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const storage = new Storage({ projectId: `${projectId}.appspot.com` });
// const storage = new Storage({ projectId });
const storage = new Storage(config);


export {
    // database as default,
    firebase,
    // googleAuthProvider,
    storage,
};


/*
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
*/
