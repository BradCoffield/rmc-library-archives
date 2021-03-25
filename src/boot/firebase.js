import Vue from 'vue'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2KDzfOiUKY1_Gvhl3DVQkhHvuMexe_oE",
  authDomain: "rmc-archives.firebaseapp.com",
  projectId: "rmc-archives",
  storageBucket: "rmc-archives.appspot.com",
  messagingSenderId: "164626853849",
  appId: "1:164626853849:web:b8a76417bef0663243b3c8",
  measurementId: "G-QHFJZN1325"
};
// Initialize Firebase
let firebaseApp = firebase.default.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.firestore()

Vue.prototype.$firestore = firebaseApp.firestore()
Vue.prototype.$fireAuth = firebaseApp.auth()

export {firebaseAuth, firebaseDb}

//import {firebaseAuth, firebaseDb} from 'boot/firebase'
