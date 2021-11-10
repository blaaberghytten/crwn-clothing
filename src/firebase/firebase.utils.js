import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBG-W1Xs3Tq-6FX2K7bKg7zP6OLpPZt4J4",
    authDomain: "crwn-clothing-db-9f31f.firebaseapp.com",
    projectId: "crwn-clothing-db-9f31f",
    storageBucket: "crwn-clothing-db-9f31f.appspot.com",
    messagingSenderId: "546164869380",
    appId: "1:546164869380:web:de08de3aed419cdcf56851",
    measurementId: "G-WMKPF88XNH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;