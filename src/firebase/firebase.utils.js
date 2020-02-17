
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config=
{
  apiKey: "AIzaSyCtyBrbBMV53q1J3ms7XkKGWAMu-H8pRpw",
  authDomain: "ecomm-db-react.firebaseapp.com",
  databaseURL: "https://ecomm-db-react.firebaseio.com",
  projectId: "ecomm-db-react",
  storageBucket: "ecomm-db-react.appspot.com",
  messagingSenderId: "228162053123",
  appId: "1:228162053123:web:e3afdf79bd67de24329a36",
  measurementId: "G-8LV9EKH1LR"
  };
  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
