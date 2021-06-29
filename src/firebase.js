import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCd8-0AaPUPgmQs19O1IfXqQYAre6bG5AA",
    authDomain: "react-auth-e74c0.firebaseapp.com",
    projectId: "react-auth-e74c0",
    storageBucket: "react-auth-e74c0.appspot.com",
    messagingSenderId: "747928307716",
    appId: "1:747928307716:web:c472f79e0cbfa118158d51"
})

export const auth = app.auth()

export default app