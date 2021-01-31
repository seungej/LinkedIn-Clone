import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDP2tp6LuhTYB0osQDYDncaSFwaR8p0LWU",
    authDomain: "linkedin-clone-ceca1.firebaseapp.com",
    projectId: "linkedin-clone-ceca1",
    storageBucket: "linkedin-clone-ceca1.appspot.com",
    messagingSenderId: "1056557015341",
    appId: "1:1056557015341:web:d9085d9da1c80f4e80b3a4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };