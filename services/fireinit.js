import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAGNS04UtFZRXl0R_MauPV5USKLxEBbYmk",
    authDomain: "bbperssite.firebaseapp.com",
    databaseURL: "https://bbperssite-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bbperssite",
    storageBucket: "bbperssite.appspot.com",
    messagingSenderId: "584787693700",
    appId: "1:584787693700:web:23a483f177470c198b32d1",
    measurementId: "G-C7EX49PQJC"
})

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
//export const DB = firebase.database();
export default firebase