import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA11brTwEhXqBxf1ou6P1ygqE-DVa3Ct5U",
    authDomain: "cmps411-2019.firebaseapp.com",
    databaseURL: "https://cmps411-2019.firebaseio.com",
    projectId: "cmps411-2019",
    storageBucket: "cmps411-2019.appspot.com",
    messagingSenderId: "31679925863",
    appId: "1:31679925863:web:39f6c78b6c60a2881bcec2",
    measurementId: "G-Y6335PFFJH"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;