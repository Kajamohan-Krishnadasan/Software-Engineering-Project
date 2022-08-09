import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { storage, db} from "../../firebase"
import { collection, addDoc, doc, updateDoc, getDocs, query, where,getDoc } from "firebase/firestore" 

async function upload(file, requester, approvers, Request_Type){
  await upload_document(file, requester, approvers, Request_Type);
  alert("successfully submitted");
}

// Upload a pdf document 
async function upload_document(file, requester, approvers, Request_Type){

  let File_Name = requester + "_"+ Date();
  const storageRef = await ref(storage, `/files/${File_Name}`)
  await uploadBytesResumable(storageRef, file);
  const downloadurl= await getDownloadURL(storageRef);
  upload_document_Details(downloadurl, approvers, requester, Request_Type);
}

// upload document details to database
async function upload_document_Details(url, approvers, requester,Request_Type){
  const docRef =  await addDoc(collection(db, "Documents"), {
    File_URL : url,
    No_of_Approvers : approvers.length,
    Requester_Mail : requester,
    File_Status: "Processing",
    Request_Type: Request_Type
  });

  let status=[];
  let comment=[];

  for(var i = 0; i < approvers.length; i++){
    
    if(i===0){
      status.push("Processing");
    }else {
      status.push("Waiting");
    }
    comment.push("");
    
  }
  const washingtonRef = await doc(db, "Documents", docRef.id);
  await updateDoc(washingtonRef, {
    Approvers: approvers,
    Status:status,
    Comment:comment
  });
}

// ongoing Request
async function readDocuments(requester,status){
  const q = query(collection(db,"Documents"),where("Requester_Mail","==",requester),where("File_Status","==",status));
  const querySnapshot = await getDocs(q);
  let temp = [];

  querySnapshot.forEach((doc)=>{
    temp.push( doc.data());
  })
  return temp;
}

async function submitStaff(doc_Id,decision,comment,staff){ 
  const washingtonRef = await doc(db, "Documents", doc_Id);
  const docSnap = await getDoc(washingtonRef);
  for(let i=0;i<docSnap.data().Approvers.length;i++){
    if(docSnap.data().Approvers[i]===staff){  
        let com=docSnap.data().Comment;
        let st=docSnap.data().Status;
        let fSt=docSnap.data().File_Status;
        com[i]=comment;
        if(decision==="Approved"){
          if((i+1)===docSnap.data().Approvers.length){
            fSt="Approved";
          }
          else{
            st[i+1]="Processing";
          }
        }
        else if(decision==="Rejected"){
          st[i]="Rejected";
          fSt="Rejected";
        }
        await updateDoc(washingtonRef, {
          Comment:com,
          Status:st,
          File_Status:fSt
        });
      }
  }
}


// async function readApprovedDocuments(requester){
//   const q = query(collection(db, "Documents"),where("Requester_Mail","==",requester),where("File_Status","==","Approved"));
//   const querySnapshot = await getDocs(q);
  
//   let temp = [];
//   querySnapshot.forEach((doc)=>{
//     temp.push(doc.data());
//   })
//   return temp;
// }

// async function readRejectDocuments(requester){
//   const q = query(collection(db,"Documents"),where("Requester_Mail","==",requester),where("File_Status","==","Rejected"));
//   const querySnapshot = await getDocs(q);
//   let temp=[];
//   querySnapshot.forEach((doc)=>{
//     temp.push(doc.data());
//   })
//   return temp;
// }



export {upload, readDocuments}