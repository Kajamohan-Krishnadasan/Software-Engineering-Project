// import * as firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Kajamohan
// gs://student-document-approval-uoj.appspot.com
const firebaseConfig = {
  apiKey: "AIzaSyAqmMkHQHROCG3IhHfMfLaVlewbqIN0dzw",
  authDomain: "student-document-approval-uoj.firebaseapp.com",
  databaseURL:
    "https://student-document-approval-uoj-default-rtdb.firebaseio.com",
  projectId: "student-document-approval-uoj",
  storageBucket: "student-document-approval-uoj.appspot.com",
  appId: "1:440037393399:web:0052a2bdadd6a5e49924f2",
  messagingSenderId: "440037393399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// const uid = auth.currentUser?.uid;

export { db, auth, app, storage };
