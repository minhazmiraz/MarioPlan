import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

var firebaseConfig = {
  apiKey: "AIzaSyA8ZdX2c_pf3cuSEdLj6N1e54X52NxhV78",
  authDomain: "marioplan-69022.firebaseapp.com",
  projectId: "marioplan-69022",
  storageBucket: "marioplan-69022.appspot.com",
  messagingSenderId: "509803742841",
  appId: "1:509803742841:web:fca66ec358a121883636a8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
