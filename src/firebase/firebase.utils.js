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


    export const creatUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();
      
      if(!snapShot.exists){

        const { displayName , email} = userAuth;

        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        }
        catch(error){

          console.log("error creating user", error.message);

        }
      
      }
      return userRef;
    };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();


  provider.setCustomParameters({'promt' : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;