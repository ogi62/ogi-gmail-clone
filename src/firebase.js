import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDeQJCg5BTc7fZJ4gu_99R7C6T1W03Ka-8",
    authDomain: "clone-26873.firebaseapp.com",
    projectId: "clone-26873",
    storageBucket: "clone-26873.appspot.com",
    messagingSenderId: "97810252899",
    appId: "1:97810252899:web:4142c212e0355c231a6456"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }