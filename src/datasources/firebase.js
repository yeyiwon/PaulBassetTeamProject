import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const db = firebase.initializeApp({
    apiKey: "AIzaSyByHnQtr18eGJYr3pbRyF4V1kgm9ZcJhIA",
    authDomain: "paulbassett-42763.firebaseapp.com",
})

export const firebaseAuth = db.auth()