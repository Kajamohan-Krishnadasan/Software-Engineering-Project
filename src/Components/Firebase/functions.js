import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

// upload the Path Details
async function PathOnSubmit(pathName, noOfApprover, Approvers) {
  const PathRef = doc(db, "Path", pathName);

  await setDoc(PathRef, {
    PathName: pathName,
    NumberOfApproves: noOfApprover,
    Approver: Approvers,
  });
  return true;
}

class PathData {
  constructor(pathName, Approver, NumberOfApproves) {
    this.pathName = pathName;
    this.Approver = Approver;
    this.NumberOfApproves = NumberOfApproves;
  }
}

const pathConverter = {
  toFirestore: (PathData) => {
    return {
      pathName: PathData.pathName,
      Approver: PathData.Approver,
      NumberOfApproves: PathData.NumberOfApproves,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new PathData(data.pathName, data.Approver, data.NumberOfApproves);
  },
};

// Get path flow Details from the Firebase Database
async function getPath(pathName) {
  const docRef = doc(db, "Path", pathName).withConverter(pathConverter);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let pathD = docSnap.data();
    let Details = pathD.Approver;
    return Details;
  }
}

export { PathOnSubmit, getPath };
