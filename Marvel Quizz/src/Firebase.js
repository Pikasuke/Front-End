import app from 'firebase'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDOxgWnc6_EkjZ-HdE30VGFzbA5PJcuF5E",
    authDomain: "marvel-quizz-fb8ad.firebaseapp.com",
    databaseURL: "https://marvel-quizz-fb8ad.firebaseio.com",
    projectId: "marvel-quizz-fb8ad",
    storageBucket: "marvel-quizz-fb8ad.appspot.com",
    messagingSenderId: "663513936177",
    appId: "1:663513936177:web:280c9f805a65ead9ac8010"
  };


class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    //inscription
    signUpUser = (email,password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

    //connexion 
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password)

    //deconnexion
    signOut = () => this.auth.signOut()

}

export default Firebase;