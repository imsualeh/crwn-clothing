import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCSvtnQC3G-jcGxFfS2FAKHCZG-Y3S-9wA",
    authDomain: "crwn-db-7e0f7.firebaseapp.com",
    projectId: "crwn-db-7e0f7",
    storageBucket: "crwn-db-7e0f7.appspot.com",
    messagingSenderId: "677533068641",
    appId: "1:677533068641:web:b7b3a886cbeb5c83486920",
    measurementId: "G-S0293QFHC3"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();


  provider.setCustomParameters({'promt' : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;