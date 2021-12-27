import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDDvZwwInsgbMeo8zDfxFfVF_LS2exAvbQ',
  authDomain: 'clone-89bd8.firebaseapp.com',
  projectId: 'clone-89bd8',
  storageBucket: 'clone-89bd8.appspot.com',
  messagingSenderId: '853331269431',
  appId: '1:853331269431:web:15237142d621e67cfdecb2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
