# Software-Engineering-Project - Student Document Approval System

This project we are doing Student Documents Approval System using React Js.

## Team Members

- **Kajamohan K.**
- **Thilakarathna R.M.S.S.**
- **Naif A.M.M.**
- **Gobishangar V.**

## Installation

- initially you need to install node js and npm in your system.
- after that you need to open the project in your editor. And open the terminal in the project folder.
- then you need to run the command `npm install` to install all the dependencies.

- create custom folder called `Firebase` in the `src` folder.
- Then create a file called `firebase.js` in the `Firebase` folder.

and paste the following code in the `firebase.js` file.

```javascript
// import * as firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  appId: "YOUR_APP_ID",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// const uid = auth.currentUser?.uid;

export { db, auth, app, storage };
```

- after that you need to run the command `npm start` to run the project.
- if any error occurs you can run the command `npm audit fix --force` to fix the errors. And then run the command `npm start` to run the project.

## Interface

### Figma UI Designs

1. Login Page UI

   1.1. Login Page UI 1

   ![Login view design using figma](FIGMA%20UI%20Designs/Login%20Page%20UI%201.png)

   1.2. Login Page UI 2
   ![Login view design using figma](FIGMA%20UI%20Designs/Login%20Page%20UI%202.png)

2. Student Homepage UI
   ![Student view design using figma](FIGMA%20UI%20Designs/Student%20Homepage%20UI.png)

3. Staff Homepage UI
   ![Staff view design using figma](FIGMA%20UI%20Designs/Staff%20Homepage%20UI.png)

4. Make Request UI
   ![Make request view design using figma](FIGMA%20UI%20Designs/Make%20a%20Requesst%20UI.png)

## user Roles

- Student
- Staff (Academic Staff)
- Admin (AR Officer)

## User Stories

### Student

- As a student, I want to be able to log in to the system using my student ID and password.
- As a student, I want to be able to view my requests.
- As a student, I want to be able to make a request.
- As a student, I want to be able to view the status of my request.
- As a student, I want to be able to view the details of my request.

### Staff (Academic Staff)

- As a staff, I want to be able to log in to the system using my staff ID and password.
- As a staff, I want to be able to view all the requests.
- As a staff, I want to be able to view the details of a request.
- As a staff, I want to be able to approve a request.
- As a staff, I want to be able to reject a request.

### Admin (AR Officer)

- As an admin, I want to be able to log in to the system using my staff ID and password.
- As an admin, I want to be able to view all the requests.
- As an admin, I want to be able to view the details of a request.
- As an admin, I want to be able to approve a request.
- As an admin, I want to be able to reject a request.

## Use Cases

### Student Use Cases

- Student Login
- Student Make a Request
- Student View Request Status
- Student View Request Details

### Staff Use Cases

- Staff Login
- Staff View Request Details
- Staff Approve Request
- Staff Reject Request

### Admin Use Cases

- Admin Login
- Admin View Request Details
- Admin Approve Request
- Admin Reject Request

## Use Case Diagram

![Use Case Diagram](/UML%20Diagrams/Use%20Case.jpg)

## Activity Diagram

![Activity Diagram](/UML%20Diagrams/Activity%20Diagram.png)

## Database

- We are using Firebase as our database for this project. We are using Firebase Storage and Firebase Firestore.

### Firebase Storage

- We are using Firebase Storage to store the documents that are uploaded by the students / staff/ admin.

### Firebase Firestore

- We are using Firebase Firestore to store the user details and the request details.
