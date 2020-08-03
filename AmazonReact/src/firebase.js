import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVtKFGG2or9qWthcqVqVFQ83m_I5JhwZ4",
    authDomain: "amazoreact.firebaseapp.com",
    databaseURL: "https://amazoreact.firebaseio.com",
    projectId: "amazoreact",
    storageBucket: "amazoreact.appspot.com",
    messagingSenderId: "766203349972",
    appId: "1:766203349972:web:593c1311d269bad1cfa441"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

  export {db, auth, storage} ;