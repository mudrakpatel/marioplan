import firebase from 'firebase/app';
import 'firebase/firestore'; //Database
import 'firebase/auth'; //Authentication

 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyBWQO9BdslAnFjp6XnDkBOb83TaO3V6mJE",
     authDomain: "marioplan-1860c.firebaseapp.com",
     databaseURL: "https://marioplan-1860c.firebaseio.com",
     projectId: "marioplan-1860c",
     storageBucket: "marioplan-1860c.appspot.com",
     messagingSenderId: "703689457156",
     appId: "1:703689457156:web:1069307c18e2ea351abf51",
     measurementId: "G-NQVS716WTL"
 };
 // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
//  firebase.firestore().settings({timestampsInSnapshots: true,});
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export default firebase;
 //firebase.analytics();

//export default firebase;