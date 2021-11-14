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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(`Error creating user`, error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;