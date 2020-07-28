import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLsl9lQQ_vsvdNFyCj1K75pUM4CdUyNYA",
    authDomain: "instareact-55e8c.firebaseapp.com",
    databaseURL: "https://instareact-55e8c.firebaseio.com",
    projectId: "instareact-55e8c",
    storageBucket: "instareact-55e8c.appspot.com",
    messagingSenderId: "1052225280484",
    appId: "1:1052225280484:web:f783dd0871ef2fdb584ff1"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

  export {db, auth, storage} ;