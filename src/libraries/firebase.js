import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA6SeXkxjOLoM5EDJKXqnursdfg9wMC_mI",
    authDomain: "shipfair-a6766.firebaseapp.com",
    projectId: "shipfair-a6766",
    storageBucket: "shipfair-a6766.appspot.com",
    messagingSenderId: "888359328107",
    appId: "1:888359328107:web:7e37eb7ad9144a6869542e",
    measurementId: "G-VXR1HTXQFX"
  };

const app = firebase.initializeApp(firebaseConfig);
<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-storage.js"></script>

const auth = app.auth();
const db = app.firestore();

export { app,auth, db, firebase };