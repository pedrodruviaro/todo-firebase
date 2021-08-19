import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB9C0svM-Zv5EKRjSC_U28qSPXs6gvEIwI",
    authDomain: "tasks-b6b40.firebaseapp.com",
    databaseURL: "https://tasks-b6b40-default-rtdb.firebaseio.com",
    projectId: "tasks-b6b40",
    storageBucket: "tasks-b6b40.appspot.com",
    messagingSenderId: "286218761225",
    appId: "1:286218761225:web:31ce4b2482b1a039f134d8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };
