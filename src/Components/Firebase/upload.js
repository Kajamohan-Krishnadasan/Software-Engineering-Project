import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../Firebase/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";

async function upload(file, requester, approvers, Request_Type) {
  await upload_document(file, requester, approvers, Request_Type);
  alert("successfully submitted");
}

// Upload a pdf document
async function upload_document(file, requester, approvers, Request_Type) {
  let File_Name = requester + "_" + Date();
  const storageRef = await ref(storage, `/files/${File_Name}`);
  await uploadBytesResumable(storageRef, file);
  const downloadurl = await getDownloadURL(storageRef);
  upload_document_Details(downloadurl, approvers, requester, Request_Type);
}

// upload document details to database
async function upload_document_Details(
  url,
  approvers,
  requester,
  Request_Type
) {
  const docRef = await addDoc(collection(db, "Documents"), {
    File_URL: url,
    No_of_Approvers: approvers.length,
    Requester_Mail: requester,
    File_Status: "Processing",
    Request_Type: Request_Type,
  });

  let status = [];
  let comment = [];

  for (var i = 0; i < approvers.length; i++) {
    if (i === 0) {
      status.push("Processing");
    } else {
      status.push("Waiting");
    }
    comment.push("");
  }
  const washingtonRef = await doc(db, "Documents", docRef.id);
  await updateDoc(washingtonRef, {
    Approvers: approvers,
    Status: status,
    Comment: comment,
  });
}

// ongoing Request / Apporoved Request / Reject Request Student Side
async function readDocuments(requester, status) {
  const q = query(
    collection(db, "Documents"),
    where("Requester_Mail", "==", requester),
    where("File_Status", "==", status)
  );
  const querySnapshot = await getDocs(q);
  let temp = [];

  querySnapshot.forEach((doc) => {
    temp.push(doc.data());
  });
  return temp;
}

// ongoing Request / Apporoved Request / Reject Request Staffs Side
async function readDocumentsStaff(staff, status) {
  const q = query(collection(db, "Documents"));
  const querySnapshot = await getDocs(q);

  let temp = [];
  querySnapshot.forEach((doc) => {
    for (let i = 0; i < doc.data().Approvers.length; i++) {
      if (
        doc.data().Approvers[i] === staff &&
        doc.data().Status[i] === status
      ) {
        temp.push(doc.data());
      }
    }
  });
  return temp;
}

// set the Document status
async function submitStaff(doc_Id, decision, comment, staff) {
  const q = query(collection(db, "Documents"), where("File_URL", "==", doc_Id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    doc_Id = doc.id;
  });

  const washingtonRef = await doc(db, "Documents", doc_Id);

  const docSnap = await getDoc(washingtonRef);
  for (let i = 0; i < docSnap.data().Approvers.length; i++) {
    if (
      docSnap.data().Approvers[i] === staff &&
      docSnap.data().Status[i] === "Processing"
    ) {
      let com = docSnap.data().Comment;
      let st = docSnap.data().Status;
      let fSt = docSnap.data().File_Status;
      com[i] = comment;
      if (decision === "Approved") {
        st[i] = "Approved";

        if (i + 1 === docSnap.data().Approvers.length) {
          fSt = "Approved";
        } else {
          st[i + 1] = "Processing";
        }
      } else if (decision === "Rejected") {
        st[i] = "Rejected";
        fSt = "Rejected";
      }

      await updateDoc(washingtonRef, {
        // Comment:com,
        Status: st,
        File_Status: fSt,
      });
    }
  }
  alert("Finished!!!");
}

// login
async function login(email, role, password) {
  let temp = [];

  if (role === "Academic Staff") {
    role = "Staff";
  }

  if (role === "Non-Academic Staff") {
    role = "AR";
  }

  // console.log("UserMail:", email);
  // console.log("Role:", role);
  // console.log("Password:", password);

  const q = query(
    collection(db, "Users"),
    where("UserMail", "==", email),
    where("Password", "==", password),
    where("Role", "==", role)
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    temp.push(doc.data());
  });

  if (temp.length > 0) {
    let userName = await getName(email);
    sessionStorage.setItem("Username", userName);
    let url = "";

    if (temp.length === 1 && role === "Student") {
      url = "/Student-Home";
      window.location.href = url;
      sessionStorage.setItem("MainHome", url);

      return false;
    } else if (temp.length === 1 && role === "Staff") {
      url = "/Acc-Staff-Home";
      window.location.href = url;
      sessionStorage.setItem("MainHome", url);

      return false;
    } else if (temp.length === 1 && role === "AR") {
      url = "/Non-Acc-Staff-Home";
      window.location.href = url;
      sessionStorage.setItem("MainHome", url);

      return false;
    }
  } else {
    return true;
  }
}

// get user name from firebase using email
async function getName(email) {
  let name = "";
  const q = query(collection(db, "Users"), where("UserMail", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    name = doc.data().Username;
  });
  return name;
}

// read all the documents which are approved
async function readApprovedDocuments(requester) {
  const q = query(
    collection(db, "Documents"),
    where("Requester_Mail", "==", requester),
    where("File_Status", "==", "Approved")
  );
  const querySnapshot = await getDocs(q);

  let temp = [];
  querySnapshot.forEach((doc) => {
    temp.push(doc.data());
  });
  return temp;
}

// read all the documents which are rejected
async function readRejectDocuments(requester) {
  const q = query(
    collection(db, "Documents"),
    where("Requester_Mail", "==", requester),
    where("File_Status", "==", "Rejected")
  );
  const querySnapshot = await getDocs(q);
  let temp = [];
  querySnapshot.forEach((doc) => {
    temp.push(doc.data());
  });
  return temp;
}

export {
  upload,
  readDocuments,
  readDocumentsStaff,
  submitStaff,
  login,
  getName,
  readRejectDocuments,
  readApprovedDocuments,
};
