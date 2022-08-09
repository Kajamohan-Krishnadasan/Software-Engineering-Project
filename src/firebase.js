// import * as firebase from "firebase/app"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyD2jbQ-IpxgK97bHhcnKXiP3sVkTjErAAg",
  authDomain: "studentdocumentapprovalsystem.firebaseapp.com",
  databaseURL: "https://studentdocumentapprovalsystem-default-rtdb.firebaseio.com",
  projectId: "studentdocumentapprovalsystem",
  storageBucket: "studentdocumentapprovalsystem.appspot.com",
  messagingSenderId: "654356979884",
  appId: "1:654356979884:web:276c5b7b87f40c1d93ff09",
  measurementId: "G-WGMGT7RD26"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// const uid = auth.currentUser?.uid;

export  {db, auth, app, storage};