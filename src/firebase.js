import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC0-60dm4sr1L5LoQA37dsmbvnorsVAklU",
    authDomain: "linkedin-e9026.firebaseapp.com",
    projectId: "linkedin-e9026",
    storageBucket: "linkedin-e9026.appspot.com",
    messagingSenderId: "713477007831",
    appId: "1:713477007831:web:5fe670761f4914a4600392"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();

  const auth = firebase.auth();

  export {db,auth};